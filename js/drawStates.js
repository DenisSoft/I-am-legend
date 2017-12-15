const heroStates = {
    deadState: {
        width: 145,
        height: 149,
        startX: 0,
        startY: 0,
        dx: 0,
        dy: -10,
        currentSpriteImg: 0,
        spriteCount: 10,
        isCurrent: false,
        correctLeftDx: -60,
    },
    jumpState: {
        width: 109,
        height: 200,
        startX: 0,
        startY: 149,
        dx: -20,
        dy: -60,
        currentSpriteImg: 0,
        spriteCount: 10,
        isCurrent: false,
        correctLeftDx: 0,
    },
    runState: {
        width: 109,
        height: 137,
        startX: 0,
        startY: 349,
        dx: -10,
        dy: 0,
        currentSpriteImg: 0,
        spriteCount: 10,
        isCurrent: false,
        correctLeftDx: 0,
    },
    stayState: {
        width: 72,
        height: 132,
        startX: 0,
        startY: 487,
        dx: 0,
        dy: 0,
        currentSpriteImg: 0,
        spriteCount: 10,
        isCurrent: false,
        correctLeftDx: 5,
    },
    swordAttackState: {
        width: 161,
        height: 149,
        startX: 0,
        startY: 620,
        dx: -10,
        dy: -3,
        currentSpriteImg: 0,
        spriteCount: 10,
        isCurrent: false,
        correctLeftDx: -65,
    },
    throwState: {
        width: 113,
        height: 135,
        startX: 0,
        startY: 769,
        dx: -26,
        dy: -1,
        currentSpriteImg: 0,
        spriteCount: 10,
        isCurrent: false,
        correctLeftDx: 14,
    },
    slideState: {
        width: 112,
        height: 105,
        startX: 0,
        startY: 904,
        dx: -35,
        dy: 39,
        currentSpriteImg: 0,
        spriteCount: 10,
        isCurrent: false,
        correctLeftDx: 0,
    },
};

function setBossStates() {
    return {
        attackState: {
            width: 261,
            height: 288,
            startX: 0,
            startY: 0,
            dx: 0,
            dy: 0,
            currentSpriteImg: 0,
            spriteCount: 8,
        },
        runState: {
            width: 261,
            height: 288,
            startX: 0,
            startY: 288,
            dx: 0,
            dy: 0,
            currentSpriteImg: 0,
            spriteCount: 10,
        },
        deadState: {
            width: 342,
            height: 314,
            startX: 0,
            startY: 576,
            dx: 0,
            dy: 0,
            currentSpriteImg: 0,
            spriteCount: 12,
        },
    };
};

function setZombiesStates() {
    return {
        stayState: {
            width: 129,
            height: 156,
            startX: 0,
            startY: 156,
            dx: 0,
            dy: 0,
            currentSpriteImg: 0,
            spriteCount: 15,
            correctLeftDx: 40,
        },
        runState: {
            width: 129,
            height: 156,
            startX: 0,
            startY: 469,
            dx: 0,
            dy: 0,
            currentSpriteImg: 0,
            spriteCount: 10,
            correctLeftDx: 40,
        },
        attackState: {
            width: 129,
            height: 156,
            startX: 0,
            startY: 312,
            dx: 0,
            dy: 0,
            currentSpriteImg: 0,
            spriteCount: 8,
            correctLeftDx: 39,
        },
        deadState: {
            width: 189,
            height: 158,
            startX: 0,
            startY: 0 ,
            dx: -45,
            dy: 15,
            currentSpriteImg: 0,
            spriteCount: 12,
            correctLeftDx: 75,
        },
    };
};

const pauseMenuButtons = {
    replay: {
        hovered: false,
        positionX: 483,
        positionY: 250,
        positionXOnSprite: 368,
        positionYOnSprite: 0,
    },
    replayEnd: {
        hovered: false,
        positionX: 645,
        positionY: 250,
        positionXOnSprite: 368,
        positionYOnSprite: 0,
    },
    continue: {
        hovered: false,
        positionX: 645,
        positionY: 250,
        positionXOnSprite: 0,
        positionYOnSprite: 0,
    },
    exit: {
        hovered: false,
        positionX: 483,
        positionY: 250,
        positionXOnSprite: 735,
        positionYOnSprite: 0,
    },
    settings: {
        nextImageDist: 184,
        widthOnSprite: 185,
        heightOnSprite: 93,
        width: 145,
        height: 73,
    },
};

const mainMenuButtons = {
    play: {
        hovered: false,
        positionX: 512,
        positionY: 210,
        positionXOnSprite: 575,
        positionYOnSprite: 244,
    },
    difficulty: {
        hovered: false,
        positionX: 512,
        positionY: 300,
        positionXOnSprite: 575,
        positionYOnSprite: 170,
    },
    control: {
        hovered: false,
        positionX: 512,
        positionY: 390,
        positionXOnSprite: 575,
        positionYOnSprite: 96,
    },
    babyMode: {
        hovered: false,
        isActive: false,
        positionX: 512,
        positionY: 150,
        positionXOnSprite: 2,
        positionYOnSprite: 400,
    },
    normal: {
        hovered: false,
        isActive: true,
        positionX: 512,
        positionY: 240,
        positionXOnSprite: 2,
        positionYOnSprite: 548,
    },
    hellMode: {
        hovered: false,
        isActive: false,
        positionX: 512,
        positionY: 330,
        positionXOnSprite: 2,
        positionYOnSprite: 474,
    },
    mainMenu: {
        hovered: false,
        positionX: 512,
        positionY: 420,
        positionXOnSprite: 575,
        positionYOnSprite: 318,
    },
    settings: {
        nextImageDist: 254,
        widthOnSprite: 250,
        heightOnSprite: 70,
        width: 250,
        height: 70,
    },
};

const controlMenuButtons = {
    mainMenuControl: {
        hovered: false,
        positionX: 555,
        positionY: 450,
        positionXOnSprite: 575,
        positionYOnSprite: 318,
    },
    settings: {
        nextImageDist: 254,
        widthOnSprite: 250,
        heightOnSprite: 70,
        width: 175,
        height: 49,
    },
};



export {heroStates, setZombiesStates, setBossStates, pauseMenuButtons, controlMenuButtons, mainMenuButtons};