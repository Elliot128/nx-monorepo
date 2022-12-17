
import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from "tsoa";
import { Todo } from "../../types/contracts/api-contracts";
import * as todoService from "./todoService";

@Route("users")
export class UsersController extends Controller {
  // @Get("{userId}")
  // public async getUser(
  //   @Path() userId: number,
  //   @Query() name?: string
  // ): Promise<User> {
  //   return todoService.get();
  // }

  @SuccessResponse("201", "Created") // Custom success response
  @Post()
  public async createUser(
    @Body() requestBody: Todo[]
  ): Promise<void> {
    this.setStatus(201); // set return status 201
    todoService.create();
    return;
  }
}