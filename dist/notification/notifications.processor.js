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
const bull_1 = require("@nestjs/bull");
const consts_1 = require("../consts");
const notification_service_1 = require("./notification.service");
const notifications_consts_1 = require("./notifications.consts");
let NotificationsProcessor = class NotificationsProcessor {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    deleteOldNotifications(job) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.notificationService.deleteOldNotifications();
        });
    }
};
__decorate([
    bull_1.Process(notifications_consts_1.DELETE_OLD_NOTIFICATION_JOB),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationsProcessor.prototype, "deleteOldNotifications", null);
NotificationsProcessor = __decorate([
    bull_1.Processor(consts_1.QUEUE_NOTIFICATIONS),
    __metadata("design:paramtypes", [notification_service_1.NotificationService])
], NotificationsProcessor);
exports.NotificationsProcessor = NotificationsProcessor;
//# sourceMappingURL=notifications.processor.js.map