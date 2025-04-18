enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Gap = SpriteKind.create()
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -100
    animation.setAction(mySprite, ActionKind.Walking)
    mySprite.startEffect(effects.rings, 300)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Gap, function (sprite, otherSprite) {
    if (otherSprite.right - sprite.left < 2) {
        info.changeScoreBy(1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
let projectile: Sprite = null
let gapSprite: Sprite = null
let gapImage: Image = null
let bottomImage: Image = null
let topImage: Image = null
let gap = 0
let mySprite: Sprite = null
scene.setBackgroundColor(15)
info.setScore(0)
effects.blizzard.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . f 2 f . . . 
    . . . . . . . . . f 2 f . . . . 
    . . . . . . . . . f f . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . f f 2 2 2 2 2 f . . . 
    . . . . f f 2 f 7 f 2 2 7 f . . 
    f . . . f 2 2 7 f f 2 7 6 f . . 
    f f . . f 2 2 f f f 7 7 6 6 f . 
    f f f f f f 7 2 2 2 6 6 6 6 6 f 
    f f f 2 2 2 f 2 2 6 6 6 6 f f . 
    f 7 f 2 2 2 2 7 2 2 2 2 2 f . . 
    f 7 7 f 7 2 2 f 2 2 2 2 2 2 f . 
    f f 7 7 f f f 2 2 2 2 2 2 2 f . 
    . f 7 7 7 7 7 7 2 2 2 2 2 f f . 
    . . f f 7 7 7 7 7 2 2 2 f f . . 
    . . . f f f f f f f f f f . . . 
    `, SpriteKind.Player)
mySprite.ay = 300
let anim = animation.createAnimation(ActionKind.Walking, 25)
anim.addAnimationFrame(img`
    ........................
    .....ffff...............
    ...fff22fff.............
    ..fff2222fff............
    .fffeeeeeefff...........
    .ffe222222eef...........
    .fe2ffffff2ef...........
    .ffffeeeeffff...........
    ffefbf44fbfeff..........
    fee41fddf14eef..........
    .ffffdddddeef...........
    fddddf444eef............
    fbbbbf2222f4e...........
    fbbbbf2222fd4...........
    .fccf45544f44...........
    ..ffffffff..............
    ....ff..ff..............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `)
anim.addAnimationFrame(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `)
anim.addAnimationFrame(img`
    . . . . . . . . . . f 2 f . . . 
    . . . . . . . . . f 2 f . . . . 
    . . . . . . . . . f f . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . f f 2 2 2 2 2 f . . . 
    . . . . f f 2 f 7 f 2 2 7 f . . 
    f . . . f 2 2 7 f f 2 7 6 f . . 
    f f . . f 2 2 f f f 7 7 6 6 f . 
    f f f f f f 7 2 2 2 6 6 6 6 6 f 
    f f f 2 2 2 f 2 2 6 6 6 6 f f . 
    f 7 f 2 2 2 2 7 2 2 2 2 2 f . . 
    f 7 7 f 7 2 2 f 2 2 2 2 2 2 f . 
    f f 7 7 f f f 2 2 2 2 2 2 2 f . 
    . f 7 7 7 7 7 7 2 2 2 2 2 f f . 
    . . f f 7 7 7 7 7 2 2 2 f f . . 
    . . . f f f f f f f f f f . . . 
    `)
anim.addAnimationFrame(img`
    . . . . . . . . . . f 2 f . . . 
    . . . . . . . . . f 2 f . . . . 
    . . . . . . . . . f f . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . f f 2 2 2 2 2 f . . . 
    . . . . f f 2 f 7 f 2 2 7 f . . 
    f . . . f 2 2 7 f f 2 7 6 f . . 
    f f . . f 2 2 f f f 7 7 6 6 f . 
    f f f f f f 7 2 2 2 6 6 6 6 6 f 
    f f f 2 2 2 f 2 2 6 6 6 6 f f . 
    f 7 f 2 2 2 2 7 2 2 2 2 2 f . . 
    f 7 7 f 7 2 2 f 2 2 2 2 2 2 f . 
    f f 7 7 f f f 2 2 2 2 2 2 2 f . 
    . f 7 7 7 7 7 7 2 2 2 2 2 f f . 
    . . f f 7 7 7 7 7 2 2 2 f f . . 
    . . . f f f f f f f f f f . . . 
    `)
anim.addAnimationFrame(img`
    . . . . . . . . . . f 2 f . . . 
    . . . . . . . . . f 2 f . . . . 
    . . . . . . . . . f f . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . f f 2 2 2 2 2 f . . . 
    . . . . f f 2 f 7 f 2 2 7 f . . 
    f . . . f 2 2 7 f f 2 7 6 f . . 
    f f . . f 2 2 f f f 7 7 6 6 f . 
    f f f f f f 7 2 2 2 6 6 6 6 6 f 
    f f f 2 2 2 f 2 2 6 6 6 6 f f . 
    f 7 f 2 2 2 2 7 2 2 2 2 2 f . . 
    f 7 7 f 7 2 2 f 2 2 2 2 2 2 f . 
    f f 7 7 f f f 2 2 2 2 2 2 2 f . 
    . f 7 7 7 7 7 7 2 2 2 2 2 f f . 
    . . f f 7 7 7 7 7 2 2 2 f f . . 
    . . . f f f f f f f f f f . . . 
    `)
anim.addAnimationFrame(img`
    . . . . . . . . . . f 2 f . . . 
    . . . . . . . . . f 2 f . . . . 
    . . . . . . . . . f f . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . f f 2 2 2 2 2 f . . . 
    . . . . f f 2 f 7 f 2 2 7 f . . 
    f . . . f 2 2 7 f f 2 7 6 f . . 
    f f . . f 2 2 f f f 7 7 6 6 f . 
    f f f f f f 7 2 2 2 6 6 6 6 6 f 
    f f f 2 2 2 f 2 2 6 6 6 6 f f . 
    f 7 f 2 2 2 2 7 2 2 2 2 2 f . . 
    f 7 7 f 7 2 2 f 2 2 2 2 2 2 f . 
    f f 7 7 f f f 2 2 2 2 2 2 2 f . 
    . f 7 7 7 7 7 7 2 2 2 2 2 f f . 
    . . f f 7 7 7 7 7 2 2 2 f f . . 
    . . . f f f f f f f f f f . . . 
    `)
animation.attachAnimation(mySprite, anim)
game.onUpdate(function () {
    if (mySprite.vy > 0) {
        animation.setAction(mySprite, ActionKind.Walking)
    }
    if (mySprite.bottom > 120 || mySprite.top < 0) {
        game.over(false)
    }
})
game.onUpdateInterval(1500, function () {
    gap = randint(0, 3)
    if (gap == 0) {
        topImage = img`
            .....f3333333333f3f.....
            ....f22f333333333f2f....
            ...f22ffff3333f2ff22f...
            ..f22f3322222222ff222f..
            ...ffff322ffff222ffff...
            ......f3ff3333ff33......
            ......333333333333......
            ......333333333333......
            ......333333333333......
            ......333333333333......
            ......333333333333......
            ......333333333333......
            ......333333333333......
            ......f3333333333f......
            .......f33333333f.......
            ........f333333f........
            `
        bottomImage = img`
            ........................
            ........................
            ..........bbbb..........
            ........bbddddbb........
            .......bddbbbbddb.......
            ......bdbbddddbbdb......
            .....bfbbdbbbbdbbfb.....
            .....bffdbddddbdbfb.....
            .....cdfbdbbbbdbffc.....
            .....cbffbddddbbfb2.....
            .....efbffbbbbdff22.....
            .....2effffdddbf22e.....
            .....222efffccfe2e......
            .....ce2222efff22e......
            .....ceee22effe2ee......
            .....fe22effffe2ee......
            .....cc22ffeeef2ee......
            ......f2ffeeeef22e......
            .....6f2feeeeefe2e6.....
            ....6772feeeeffe2676....
            ...67772f6eeef6626776...
            ..6776826f76ff72267776..
            ...668e27ff8f67288666...
            ......e222ffee22ecee....
            ......ee62effe26eef.....
            ......ee22feef222ef.....
            ......ee2efeeeff22f.....
            ......e22ffeeeeff2f.....
            ......c2ffeeeeeef2f.....
            ......c2feeeeeeef22.....
            ......f2feeeeeeeff2.....
            .....6f2feeeeeeeff2.....
            ....6772feeeeeeef626....
            ...67772f6eeee66f2276...
            ..6776e2ff77777ff27776..
            ...668e27f6886ff82666...
            ......e27ffeeff722......
            ......e22effffe22e......
            ......ee22effee2ce......
            ......eec2ffef22ce......
            ......eec2feee22fe......
            ......ee22eeeef2fe......
            ......ee2feeeef22e......
            ......ee2feeeefe2e......
            .....6ee2feeeefe226.....
            ....67762ffeeefee276....
            ...6776626feeef762776...
            ..6776ee22ff7ff7627776..
            ...668c2276fff7782666...
            ......c27ffffe6722......
            ......c2ffeeffe622......
            ......c2feeeefeee2......
            ......f2feeeeffc22......
            ......f2fceeecfc2e......
            ......f2feeeccff2c......
            ......f22ceeccef2c......
            ......fc2cccecef2c......
            .....6fc2fcccccf226.....
            ....67762cfcccccf276....
            ...67766222ffc6ff2776...
            ..6776c222777fff627776..
            ...66822776fffff22666...
            ......2c7fffcc622f......
            ......ffffccccc2ff......
            `
    } else if (gap == 1) {
        topImage = img`
            .....6feeeeeeeeeef6.....
            ....6776eeeeeeeee676....
            ...6777666eeee6667776...
            ..6776ee67777777667776..
            ...668ee7768867788666...
            ......ee77eeee67ee......
            ......ee6eeeeee6ce......
            ......eefeeeeeeece......
            ......eeceeeeeeece......
            ......eeceeeeeeefe......
            ......eeceeeeeeefe......
            ......eeeeeeeeeefe......
            ......eeeeeeeeeece......
            .....6eeeeeeeeeece6.....
            ....6776eeeeeeeee676....
            ...6776666eeee6766776...
            ..6776ee77777777667776..
            ...668ce7768867788666...
            ......ce77eeee67ee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......beeeeeeeeeeb......
            .......beeeeeeeeb.......
            ........beeeeeeb........
            ........................
            ........................
            ........................
            `
        bottomImage = img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ..........bbbb..........
            ........bbddddbb........
            .......bddbbbbddb.......
            ......bdbbddddbbdb......
            .....bdbbdbbbbdbbdb.....
            .....bdbdbddddbdbdb.....
            .....cdbbdbbbbdbbdc.....
            .....cbdbbddddbbdbc.....
            .....efbddbbbbddbce.....
            .....eeffbddddbccee.....
            .....eeeeffcccceee......
            .....ceeeeeeeeeeee......
            .....ceeeeeeeeeeee......
            .....feeeeeeeeeeee......
            .....cceeeeeeeeeee......
            ......feeeeeeeeeee......
            .....6fceeeeeeeeee6.....
            ....6776eeeeeeeee676....
            ...6777666eeee6666776...
            ..67768e67766777667776..
            ...668ee7768867788666...
            ......ee77eeee77ecee....
            ......ee6eeeeee6eef.....
            ......eeeeeeeeeeeef.....
            ......eeeeeeeeeeeef.....
            ......eeeeeeeeeeecf.....
            ......ceeeeeeeeeecf.....
            ......ceeeeeeeeeeff.....
            ......feeeeeeeeeefe.....
            .....6feeeeeeeeeef6.....
            ....6776eeeeeeeee676....
            ...6777666eeee6667776...
            ..6776ee67777777667776..
            ...668ee7768867788666...
            ......ee77eeee67ee......
            ......ee6eeeeee6ce......
            ......eefeeeeeeece......
            ......eeceeeeeeece......
            ......eeceeeeeeefe......
            ......eeceeeeeeefe......
            ......eeeeeeeeeefe......
            ......eeeeeeeeeece......
            .....6eeeeeeeeeece6.....
            ....6776eeeeeeeee676....
            ...6776666eeee6766776...
            ..6776ee77777777667776..
            ...668ce7768867788666...
            ......ce77eeee67ee......
            ......ce6eeeeee6ee......
            `
    } else if (gap == 2) {
        topImage = img`
            .....6feeeeeeeeeef6.....
            ....6776eeeeeeeee676....
            ...6777666eeee6667776...
            ..6776ee67777777667776..
            ...668ee7768867788666...
            ......ee77eeee67eeee....
            ......ee6eeeeee6cef.....
            ......eeeeeeeeeeeef.....
            ......eeeeeeeeeeeef.....
            ......eeeeeeeeeeecf.....
            ......eeeeeeeeeeecf.....
            ......eeeeeeeeeeeff.....
            ......feeeeeeeeeefe.....
            .....6feeeeeeeeeef6.....
            ....6776eeeeeeeee676....
            ...6777666eeee6667776...
            ..6776ee67777777667776..
            ...668ee7768867788666...
            ......ee77eeee67ee......
            ......ee6eeeeee6ce......
            ......eefeeeeeeece......
            ......eeceeeeeeece......
            ......eeceeeeeeefe......
            ......eeceeeeeeefe......
            ......eeeeeeeeeefe......
            ......eeeeeeeeeece......
            .....6eeeeeeeeeece6.....
            ....6776eeeeeeeee676....
            ...6776666eeee6766776...
            ..6776ee77777777667776..
            ...668ce7768867788666...
            ......ce77eeee67ee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......beeeeeeeeeeb......
            .......beeeeeeeeb.......
            ........beeeeeeb........
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `
        bottomImage = img`
            ........................
            ........................
            ........................
            ........................
            ..........bbbb..........
            ........bbddddbb........
            .......bddbbbbddb.......
            ......bdbbddddbbdb......
            .....bdbbdbbbbdbbdb.....
            .....bdbdbddddbdbdb.....
            .....cdbbdbbbbdbbdc.....
            .....cbdbbddddbbdbc.....
            .....efbddbbbbddbce.....
            .....eeffbddddbccee.....
            .....eeeeffcccceee......
            .....ceeeeeeeeeeee......
            .....ceeeeeeeeeeee......
            .....feeeeeeeeeeee......
            .....cceeeeeeeeeee......
            ......feeeeeeeeeee......
            .....6fceeeeeeeeee6.....
            ....6776eeeeeeeee676....
            ...6777666eeee6666776...
            ..67768e67766777667776..
            ...668ee7768867788666...
            ......ee77eeee77ecee....
            ......ee6eeeeee6eef.....
            ......eeeeeeeeeeeef.....
            ......eeeeeeeeeeeef.....
            ......eeeeeeeeeeecf.....
            ......ceeeeeeeeeecf.....
            ......ceeeeeeeeeeff.....
            ......feeeeeeeeeefe.....
            .....6feeeeeeeeeef6.....
            ....6776eeeeeeeee676....
            ...6777666eeee6667776...
            ..6776ee67777777667776..
            ...668ee7768867788666...
            ......ee77eeee67ee......
            ......ee6eeeeee6ce......
            `
    } else {
        topImage = img`
            .....6fceeeeeeeeee6.....
            ....6776eeeeeeeee676....
            ...6777666eeee6666776...
            ..67768e67766777667776..
            ...668ee7768867788666...
            ......ee77eeee77ecee....
            ......ee6eeeeee6eef.....
            ......eeeeeeeeeeeef.....
            ......eeeeeeeeeeeef.....
            ......eeeeeeeeeeecf.....
            ......ceeeeeeeeeecf.....
            ......ceeeeeeeeeeff.....
            ......feeeeeeeeeefe.....
            .....6feeeeeeeeeef6.....
            ....6776eeeeeeeee676....
            ...6777666eeee6667776...
            ..6776ee67777777667776..
            ...668ee7768867788666...
            ......ee77eeee67eeee....
            ......ee6eeeeee6cef.....
            ......eeeeeeeeeeeef.....
            ......eeeeeeeeeeeef.....
            ......eeeeeeeeeeecf.....
            ......eeeeeeeeeeecf.....
            ......eeeeeeeeeeeff.....
            ......feeeeeeeeeefe.....
            .....6feeeeeeeeeef6.....
            ....6776eeeeeeeee676....
            ...6777666eeee6667776...
            ..6776ee67777777667776..
            ...668ee7768867788666...
            ......ee77eeee67ee......
            ......ee6eeeeee6ce......
            ......eefeeeeeeece......
            ......eeceeeeeeece......
            ......eeceeeeeeefe......
            ......eeceeeeeeefe......
            ......eeeeeeeeeefe......
            ......eeeeeeeeeece......
            .....6eeeeeeeeeece6.....
            ....6776eeeeeeeee676....
            ...6776666eeee6766776...
            ..6776ee77777777667776..
            ...668ce7768867788666...
            ......ce77eeee67ee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......beeeeeeeeeeb......
            .......beeeeeeeeb.......
            ........beeeeeeb........
            ........................
            `
        bottomImage = img`
            ........................
            ..........bbbb..........
            ........bbddddbb........
            .......bddbbbbddb.......
            ......bdbbddddbbdb......
            .....bdbbdbbbbdbbdb.....
            .....bdbdbddddbdbdb.....
            .....cdbbdbbbbdbbdc.....
            .....cbdbbddddbbdbc.....
            .....efbddbbbbddbce.....
            .....eeffbddddbccee.....
            .....eeeeffcccceee......
            .....ceeeeeeeeeeee......
            .....ceeeeeeeeeeee......
            .....feeeeeeeeeeee......
            .....cceeeeeeeeeee......
            ......feeeeeeeeeee......
            .....6fceeeeeeeeee6.....
            ....6776eeeeeeeee676....
            ...6777666eeee6666776...
            ..67768e67766777667776..
            ...668ee7768867788666...
            ......ee77eeee77ecee....
            ......ee6eeeeee6eef.....
            `
    }
    gapImage = image.create(2, scene.screenHeight())
    gapImage.fill(1)
    gapSprite = sprites.create(gapImage, SpriteKind.Gap)
    gapSprite.setFlag(SpriteFlag.AutoDestroy, true)
    gapSprite.setFlag(SpriteFlag.Invisible, true)
    gapSprite.left = scene.screenWidth()
    gapSprite.vx = -45
    projectile = sprites.createProjectileFromSide(topImage, -45, 0)
    projectile.top = 0
    projectile = sprites.createProjectileFromSide(bottomImage, -45, 0)
    projectile.bottom = scene.screenHeight()
})
