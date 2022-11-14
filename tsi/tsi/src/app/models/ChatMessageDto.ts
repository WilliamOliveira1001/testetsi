export class ChatMessageDto {
    user: string | undefined;
    message: string | undefined;
    constructor(user: string, message: string){
        this.user = user,
        this.message = message 
    }
}