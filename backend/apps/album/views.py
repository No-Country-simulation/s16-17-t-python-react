from rest_framework import status, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404
from .models import Album
from .serializers import AlbumSerializer

class AlbumListCreateAPIView(APIView):
    #permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get(self, request):
        albums = Album.objects.all()
        serializer = AlbumSerializer(albums, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = AlbumSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(account=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AlbumDetailAPIView(APIView):
    #permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_object(self, pk):
        try:
            return Album.objects.get(pk=pk)
        except Album.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        album = self.get_object(pk)
        serializer = AlbumSerializer(album)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        album = self.get_object(pk)
        if album.account != request.user:
            return Response({'detail': 'You do not have permission to edit this album.'}, status=status.HTTP_403_FORBIDDEN)
        serializer = AlbumSerializer(album, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD)
    
    def delete(self, request, pk):
        album = self.get_object(pk)
        if album.account != request.user:
            return Response({'detail': 'You do not have permission to delete this album.'}, status=status.HTTP_403_FORBIDDEN)
        album.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)