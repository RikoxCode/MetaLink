import {
    Controller,
    Get,
    Post,
    Delete,
    Put,
    Body,
    Param,
} from '@nestjs/common';
import {
    ApiTags,
    ApiResponse,
    ApiParam,
    ApiBody,
    ApiOkResponse,
    ApiOperation,
} from '@nestjs/swagger';
import { UserService } from './user.service';
import { IUser } from './interfaces/user.interface';
import CreateSwaggerModel from './swagger/create.swagger_model';
import BaseFunctions from 'src/core/base-functions';
import { State, User } from './schemas/user.schema';
// import DeleteSwaggerModel from './swagger/delete.swagger_model';


@ApiTags('Users')
@Controller('api/users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    @ApiOperation({ summary: 'Get all users' })
    @ApiResponse({ status: 200, description: 'Return all users.' })
    async findAll() {

        BaseFunctions._log(
            'All users found',
            '200',
            'GET',
            '/api/users/',
        );

        return await this.userService.findAll();
    }

    @Get(':id/id')
    @ApiOperation({ summary: 'Get user by id' })
    @ApiParam({ name: 'id', type: String })
    @ApiResponse({ status: 200, description: 'Return user.' })
    async findOneById(@Param('id') id: string) {

        BaseFunctions._log(
            'User with id: ' + id + ' found',
            '200',
            'GET',
            '/api/users/:id/id',
        );

        return await this.userService.findOneById(id);
    }

    @Get(':username/username')
    @ApiOperation({ summary: 'Get user by username' })
    @ApiParam({ name: 'username', type: String })
    @ApiResponse({ status: 200, description: 'Return user.' })
    async findOneByUsername(@Param('username') username: string) {

        BaseFunctions._log(
            'User with username: ' + username + ' found',
            '200',
            'GET',
            '/api/users/:username/username',
        );

        return await this.userService.findOneByUsername(username);
    }

    @Post('create')
    @ApiOperation({ summary: 'Create user' })
    @ApiBody({ type: CreateSwaggerModel })
    @ApiResponse({ status: 200, description: 'Return user.' })
    async create(@Body() user: User) {

        BaseFunctions._log(
            'User with username: ' + user.name + ' created',
            '200',
            'POST',
            '/api/auth/create',
        );

        // define default values
        user.role = 'user';
        user.state = State.LOGGEDIN

        return await this.userService.create(user);
    }

    @Delete('delete:id')
    @ApiOperation({ summary: 'Delete user' })
    @ApiParam({ name: 'id', type: String })
    @ApiResponse({ status: 200, description: 'Return user.' })
    async delete(@Param('id') id: string) {

        BaseFunctions._log(
            'User with id: ' + id + ' deleted',
            '200',
            'DELETE',
            '/api/auth/delete',
        );

        return await this.userService.delete(id);
    }

    @Put('edit:id')
    @ApiOperation({ summary: 'Edit user' })
    @ApiParam({ name: 'id', type: String })
    @ApiBody({ type: CreateSwaggerModel })
    @ApiResponse({ status: 200, description: 'Return user.' })
    async edit(@Param('id') id: string, @Body() user: User) {

        BaseFunctions._log(
            'User with username: ' + user.name + ' edited',
            '200',
            'PUT',
            '/api/auth/edit',
        );

        return await this.userService.edit(id, user);
    }
}