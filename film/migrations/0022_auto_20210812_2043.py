# Generated by Django 3.2 on 2021-08-12 17:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('film', '0021_auto_20210712_2155'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='film',
            name='director',
        ),
        migrations.CreateModel(
            name='director_film',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Directors', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='director', to='film.director')),
                ('films', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='filmdirector', to='film.film')),
            ],
        ),
    ]
