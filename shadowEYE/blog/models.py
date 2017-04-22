# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Blub(models.Model):
    title = models.CharField(max_length=52)
    slug = models.SlugField()
    body = models.TextField()
    subtitle = models.CharField(max_length=500)
    create_date = models.DateTimeField('date inflated')
    update_date = models.DateTimeField('date edited')



# Create your models here.
