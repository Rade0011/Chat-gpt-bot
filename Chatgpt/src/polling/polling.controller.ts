import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PollingService } from './polling.service';
import { CreatePollingDto } from './dto/create-polling.dto';
import { UpdatePollingDto } from './dto/update-polling.dto';

@Controller('polling')
export class PollingController {
  
}
