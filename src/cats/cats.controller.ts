import { Controller, Get, Post, Body, Patch, Param, Delete, Req, HttpCode, Header, Redirect, UseFilters, ForbiddenException, ParseIntPipe, UsePipes, UseGuards } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto, createCatSchema } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { ZooValidationPipe } from 'src/zoo-validation/zoo-validation.pipe';
import { ValidationPipe } from 'src/validation/validation.pipe';
import { AuthGuard, Roles } from 'src/auth/auth.guard';

@Controller('cats')
@UseGuards(AuthGuard)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @Roles('admin')
  // @UsePipes(new ZooValidationPipe(createCatSchema))
  // @UseFilters(new HttpExceptionFilter())
  create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
    // throw new ForbiddenException();
    return this.catsService.create(createCatDto);
  }

  @Get()
 async findAll(@Req() request: Request) {
    
    // return this.catsService.findAll();
    return  request.headers
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: string) {
    return this.catsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(+id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(+id);
  }
}
