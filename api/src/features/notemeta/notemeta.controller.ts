import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { NotemetaService } from './notemeta.service';
import { Notemeta } from './schemas/notemeta.schema';
import BaseFunctions from '../../core/base-functions';
import { SwaggerItem, SwaggerCreate, SwaggerDelete, SwaggerUpdate } from './swagger/model.item';
import {
  ApiTags,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

@ApiTags('Notemeta')
@Controller('api/notemeta')
export class NotemetaController {
  constructor(private readonly NotemetaService: NotemetaService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Get all Archive Items',
    type: SwaggerItem, // Hier sollte der Typ Ihrer Antwort stehen
    isArray: true,
  })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  findAll() {
    try {
      BaseFunctions._log(
        'Find all Archive Items',
        '200',
        'GET',
        '/api/notemeta',
      );
      return this.NotemetaService.findAll();
    } catch (error) {
      BaseFunctions._log(
        'Internal Server Error',
        '500',
        'GET',
        '/api/notemeta',
      );
      return error;
    }
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Get one special Archive Items',
    type: SwaggerItem, // Hier sollte der Typ Ihrer Antwort stehen
    isArray: false,
  })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  @ApiParam({ name: 'id', format: '_id', type: 'string' })
  async findOne(@Param() param) {
    try {
      BaseFunctions._log(
        'Find one Archive Item',
        '200',
        'GET',
        '/api/notemeta/{id}',
      );
      return this.NotemetaService.findOne(param.id);
    } catch (error) {
      BaseFunctions._log(
        'Internal Server Error! Maybe you forgot the item ID? ',
        '500',
        'GET',
        '/api/notemeta/{id}',
      );
      return error;
    }
  }

  @Post()
  @ApiResponse({
    status: 200,
    description: 'Create a Archive Items',
    type: SwaggerCreate, // Hier sollte der Typ Ihrer Antwort stehen
    isArray: false,
  })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  @ApiBody({ type: SwaggerCreate })
  async create(@Body() body: Notemeta): Promise<Notemeta> {
    try {
      BaseFunctions._log(
        'Create new Archive Item',
        '200',
        'POST',
        '/api/notemeta',
      );
      return this.NotemetaService.create(body);
    } catch (error) {
      BaseFunctions._log(
        'Internal Server Error',
        '500',
        'POST',
        '/api/notemeta',
      );
      return error;
    }
  }

  @Delete('deleteone:id')
  @ApiResponse({
    status: 200,
    description: 'Delete a Archive Items',
    type: SwaggerDelete, // Hier sollte der Typ Ihrer Antwort stehen
    isArray: false,
  })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  @ApiParam({ name: 'id', format: '_id', type: 'string' })
  async delete(@Param() param) {
    try {
      BaseFunctions._log(
        'Delete one Archive Item',
        '200',
        'DELETE',
        '/api/notemeta/{id}',
      );
      return this.NotemetaService.delete(param.id);
    } catch (error) {
      BaseFunctions._log(
        'Internal Server Error! Maybe you forgot the item ID? ',
        '500',
        'DELETE',
        '/api/notemeta/{id}',
      );
      return error;
    }
  }

  @Delete('deleteall')
  @ApiResponse({
    status: 200,
    description: 'Delete all Archive Items',
    type: SwaggerDelete, // Hier sollte der Typ Ihrer Antwort stehen
    isArray: false,
  })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  async deleteAll() {
    try {
      BaseFunctions._log(
        'Delete all Archive Items',
        '200',
        'DELETE',
        '/api/notemeta',
      );
      return this.NotemetaService.deleteAll();
    } catch (error) {
      BaseFunctions._log(
        'Internal Server Error! Maybe you forgot the item ID? ',
        '500',
        'DELETE',
        '/api/notemeta',
      );
      return error;
    }
  }

  @Put(':id')
  @ApiResponse({
    status: 200,
    description: 'Create a Archive Items',
    type: SwaggerUpdate, // Hier sollte der Typ Ihrer Antwort stehen
    isArray: false,
  })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  @ApiBody({ type: SwaggerUpdate })
  @ApiParam({ name: 'id', format: '_id', type: 'string' })
  async update(@Param() param, @Body() body): Promise<Notemeta> {
    try {
      BaseFunctions._log(
        'Update one Archive Item',
        '200',
        'PUT',
        '/api/notemeta/{id}',
      );
      return this.NotemetaService.update(param.id, body);
    } catch (error) {
      BaseFunctions._log(
        'Internal Server Error! Maybe you forgot the item ID? ',
        '500',
        'PUT',
        '/api/notemeta/{id}',
      );
      return error;
    }
  }
}
