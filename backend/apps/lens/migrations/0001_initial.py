# Generated by Django 5.0.7 on 2024-07-11 00:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Lens',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lens_name', models.CharField(max_length=50)),
                ('lens_model', models.CharField(max_length=100)),
                ('brand', models.CharField(max_length=50)),
                ('aperture', models.CharField(max_length=100)),
                ('focal_length', models.CharField(max_length=50)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]