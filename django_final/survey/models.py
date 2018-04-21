# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class SurveyQuestion(models.Model):
    respondent = models.CharField(max_length=100)
    counter = models.IntegerField(default=5)