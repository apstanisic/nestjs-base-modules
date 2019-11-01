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
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../entities/base.entity");
let Role = class Role extends base_entity_1.BaseEntity {
};
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Role.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.IsString(),
    class_validator_1.Length(1, 100),
    __metadata("design:type", String)
], Role.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ default: '/*' }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], Role.prototype, "domain", void 0);
__decorate([
    typeorm_1.Column({ type: 'text', nullable: true }),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    class_validator_1.Length(2, 2000),
    __metadata("design:type", String)
], Role.prototype, "description", void 0);
Role = __decorate([
    typeorm_1.Entity()
], Role);
exports.Role = Role;
//# sourceMappingURL=roles.entity.js.map