import { getUsers } from "../controllers/userController.js";
import request from 'supertest';

describe('GET /users', () =>{
    test('should respond whit a 200 status code', async () =>{
        const response = await request(getUsers).get('/')

    });
});