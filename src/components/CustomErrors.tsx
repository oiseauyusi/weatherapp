export class EmptyCityError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "Provided empty city!";
    }
}

export class WheatherApiDead extends Error {
    constructor(message: string) {
        super(message);
        this.name = "Could not extract information from weather API.";
    }
}