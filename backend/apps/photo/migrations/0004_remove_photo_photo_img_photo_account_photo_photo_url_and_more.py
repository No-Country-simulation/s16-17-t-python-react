# Generated by Django 5.0.7 on 2024-07-25 21:25

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('photo', '0003_remove_photo_photo_url_photo_photo_img'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.RemoveField(
            model_name='photo',
            name='photo_img',
        ),
        migrations.AddField(
            model_name='photo',
            name='account',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='photo',
            name='photo_url',
            field=models.URLField(default=1),
        ),
        migrations.AddField(
            model_name='photolike',
            name='account',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
        migrations.AlterUniqueTogether(
            name='photolike',
            unique_together={('photo', 'account')},
        ),
    ]
