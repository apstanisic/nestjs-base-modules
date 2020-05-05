"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const get_user_decorator_1 = require("../auth/get-user.decorator");
const uuid_pipe_1 = require("../pipes/uuid.pipe");
const base_user_service_1 = require("../users/base-user.service");
const auth_sessions_dto_1 = require("./auth-sessions.dto");
const auth_sessions_service_1 = require("./auth-sessions.service");
let AuthSessionsController = class AuthSessionsController {
    constructor(service, jwtService, usersService) {
        this.service = service;
        this.jwtService = jwtService;
        this.usersService = usersService;
    }
    login(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.service.attemptLogin(params.email, params.password);
        });
    }
    getAll(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.service.find({ userId: user.id });
            return { data };
        });
    }
    revoke(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.service.deleteWhere({ id, userId: user.id });
        });
    }
    getNewAccessToken(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.service.getNewAccessToken(refreshToken);
        });
    }
};
__decorate([
    common_1.Post('login'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_sessions_dto_1.LoginUserDto]),
    __metadata("design:returntype", Promise)
], AuthSessionsController.prototype, "login", null);
__decorate([
    common_1.Get('sessions'),
    __param(0, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthSessionsController.prototype, "getAll", null);
__decorate([
    common_1.Delete('sessions/:id'),
    __param(0, common_1.Param('id', uuid_pipe_1.ValidUUID)),
    __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AuthSessionsController.prototype, "revoke", null);
__decorate([
    common_1.Post('sessions/new-token'),
    __param(0, common_1.Body('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthSessionsController.prototype, "getNewAccessToken", null);
AuthSessionsController = __decorate([
    common_1.Controller('auth'),
    __metadata("design:paramtypes", [auth_sessions_service_1.AuthSessionsService,
        jwt_1.JwtService,
        base_user_service_1.BaseUserService])
], AuthSessionsController);
exports.AuthSessionsController = AuthSessionsController;
//# sourceMappingURL=auth-sessions.controller.js.map