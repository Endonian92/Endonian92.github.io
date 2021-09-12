function cheat(){
  order_religion = 4;
  order_natade = 7;
  order_notice = 9;
}
function preload() {
  img1 = loadImage("1階.png");
  img2 = loadImage("2階.png");
  img3 = loadImage("3階.png");
  QR1 = loadImage("1.png");
  QR2 = loadImage("2.png");
  QR3 = loadImage("3.png");
  QR4 = loadImage("4.png");
  QR5 = loadImage("5.png");
  QR6 = loadImage("6.png");
  QR7 = loadImage("7.png");
  QR8 = loadImage("8.png");
  QR9 = loadImage("9.png");
  QR10 = loadImage("10.png");
  QR21 = loadImage("21.png");
  QR22 = loadImage("22.png");
  QR23 = loadImage("23.png");
  QR24 = loadImage("24.png");
  QR25 = loadImage("25.png");
  QR26 = loadImage("26.png");
  QR27 = loadImage("27.png");
  QR31 = loadImage("31.png");
  QR32 = loadImage("32.png");
  QR33 = loadImage("33.png");
  QR34 = loadImage("34.png");
  //QR1 = loadImage("tangkeke.jpg");
}
function setup() {
  createCanvas(2304, 1599);
  help = createButton("ヘルプ");
  help.position(splitex - 276,splitey - 276);
  up_arrow = createButton("⬆");
  up_arrow.position(splitex - 60, splitey - 148);
  up_arrow.size(30, 30);
  down_arrow = createButton("⬇");
  down_arrow.position(splitex - 60, splitey - 118);
  down_arrow.size(30, 30);
  right_arrow = createButton("➡");
  right_arrow.position(splitex - 30, splitey - 118);
  right_arrow.size(30, 30);
  left_arrow = createButton("⬅");
  left_arrow.position(splitex - 90, splitey - 118);
  left_arrow.size(30, 30);
}
var up_arrow,
  down_arrow,
  right_arrow,
  left_arrow,
  splitex = 96,
  splitey = 160,
  floo = 3,
  route = 0,
  aler = 0,
  eve = 0,
  hard = false;
function draw() {
  strokeWeight(1);
  fill(255, 255, 255, 255);
  background(0, 240, 250);
  if (floo == 1) {
    image(img1, 0, 0);
  } else if (floo == 2) {
    image(img2, 0, 0);
  } else if (floo == 3) {
    image(img3, 0, 0);
  }
  circle(splitex, splitey, 64);
  stroke(1, 1, 1, 256);
  textSize(32);
  strokeWeight(4);
  text("あなたは今" + floo + "階に居ます。", splitex, splitey - 70);
  strokeWeight(1);
  stair();
  up_arrow.mousePressed(function () {
    key = "w";
    keyTyped();
  });
  up_arrow.position(splitex + 40, splitey + 68);
  down_arrow.mousePressed(function () {
    key = "s";
    keyTyped();
  });
  down_arrow.position(splitex + 40, splitey + 98);
  right_arrow.mousePressed(function () {
    key = "d";
    keyTyped();
  });
  right_arrow.position(splitex + 70, splitey + 98);
  left_arrow.mousePressed(function () {
    key = "a";
    keyTyped();
  });
  left_arrow.position(splitex + 10, splitey + 98);
  navigate();
  event();
}
function keyTyped() {
  if (key === "s") {
    var c = get(splitex, splitey + 64);
    var R = c[0];
    var G = c[1];
    if (R == 0 || R == 183) {
      let alpha = 0;
    } else {
      if (G == 256) {
        //
      } else {
        splitey += 64;
        scrollBy(0,64);
      }
    }
  } else if (key === "w") {
    var c = get(splitex, splitey - 64);
    var R = c[0];
    var G = c[1];
    if (R == 0 || R == 183) {
      let alpha = 0;
    } else {
        splitey -= 64;
        scrollBy(0,-64);
    }
  } else if (key === "d") {
    var c = get(splitex + 64, splitey);
    var R = c[0];
    var G = c[1];
    if (R == 0 || R == 183) {
      let alpha = 0;
    } else {
        splitex += 64;
        scrollBy(64,0);
    }
  } else if (key === "a") {
    var c = get(splitex - 64, splitey);
    var R = c[0];
    var G = c[1];
    if (R == 0 || R == 183) {
      let alpha = 0;
    } else {
        splitex -= 64;
        scrollBy(-64,0);
    }
  }
}
function stair() {
  if (splitex == 544 && splitey == 96 && floo == 3) {
    //3階からの処理
    if (aler == 0) {
      if (confirm("OKを押すと2階にキャンセルを押すと1階に行きます。")) {
        floo = 2;
      } else {
        floo = 1;
      }
      aler = 1;
    }
  } else if (splitex == 480 && splitey == 96 && floo == 2) {
    if (aler == 0) {
      if (confirm("OKを押すと3階にキャンセルを押すと1階に行きます。")) {
        floo = 3;
      } else {
        floo = 1;
      }
      aler = 1;
    }
  } else if (splitex == 480 && splitey == 96 && floo == 1) {
    if (aler == 0) {
      if (confirm("OKを押すと3階にキャンセルを押すと2階に行きます。")) {
        floo = 3;
      } else {
        floo = 2;
      }
      aler = 1;
    }
  } else if (splitex == 1888 && splitey == 288 && floo == 3) {
    if (aler == 0) {
      if (confirm("OKを押すと2階にキャンセルを押すと1階に行きます。")) {
        floo = 2;
      } else {
        floo = 1;
      }
      aler = 1;
    }
  } else if (splitex == 1888 && splitey == 288 && floo == 2) {
    if (aler == 0) {
      if (confirm("OKを押すと3階にキャンセルを押すと1階に行きます。")) {
        floo = 3;
      } else {
        floo = 1;
      }
      aler = 1;
    }
  } else if (splitex == 1888 && splitey == 288 && floo == 1) {
    if (aler == 0) {
      if (confirm("OKを押すと3階にキャンセルを押すと2階に行きます。")) {
        floo = 3;
      } else {
        floo = 2;
      }
      aler = 1;
    }
  } else if (splitex == 1888 && splitey == 1056 && floo == 3) {
    if (aler == 0) {
      if (confirm("OKを押すと2階にキャンセルを押すと1階に行きます。")) {
        floo = 2;
      } else {
        floo = 1;
      }
      aler = 1;
    }
  } else if (splitex == 1888 && splitey == 1056 && floo == 2) {
    if (aler == 0) {
      if (confirm("OKを押すと3階にキャンセルを押すと1階に行きます。")) {
        floo = 3;
      } else {
        floo = 1;
      }
      aler = 1;
    }
  } else if (splitex == 1888 && splitey == 1056 && floo == 1) {
    if (aler == 0) {
      if (confirm("OKを押すと3階にキャンセルを押すと2階に行きます。")) {
        floo = 3;
      } else {
        floo = 2;
      }
      aler = 1;
    }
  } else if (splitex == 416 && splitey == 1056 && floo == 3) {
    if (aler == 0) {
      if (confirm("OKを押すと2階にキャンセルを押すと1階に行きます。")) {
        floo = 2;
      } else {
        floo = 1;
      }
      aler = 1;
    }
  } else if (splitex == 416 && splitey == 1056 && floo == 2) {
    if (aler == 0) {
      if (confirm("OKを押すと3階にキャンセルを押すと1階に行きます。")) {
        floo = 3;
      } else {
        floo = 1;
      }
      aler = 1;
    }
  } else if (splitex == 416 && splitey == 1056 && floo == 1) {
    if (aler == 0) {
      if (confirm("OKを押すと3階にキャンセルを押すと2階に行きます。")) {
        floo = 3;
      } else {
        floo = 2;
      }
      aler = 1;
    }
  } else {
    aler = 0;
  }
}
function event() {
  if (splitex == 96 && splitey == 288 && floo == 3 && route == 0) {
    if (eve == 0) {
      //ルート選択
      route = prompt(
        "希望するルートの番号を半角数字で入力してください。" +
          "\n" +
          "予告状：1" +
          "\n" +
          "ナタデココ：2" +
          "\n" +
          "宗教：3"
      );
      if (route == 1 || route == 3) {
        if (confirm("ハードモードを選択する場合はOKを押してください。")) {
          hard = true;
        }
      }
      eve = 1;
    }
  } else if (
    splitex == 1376 &&
    splitey == 1184 &&
    floo == 3 &&
    route == 1 &&
    order_notice == 0
  ) {
    //地理教室
    imageMode(CENTER);
    if (hard == true) {
      image(QR1, splitex, splitey); //ハード
    } else {
      image(QR1, splitex, splitey); //イージー
    }
    imageMode(CORNER);
    if (
      confirm(
        "1回目はキャンセルを押し、QRコードを読み終わったらOKを押してください。"
      )
    ) {
      erase();
      order_notice = 1;
    }
  } else if (
    splitex == 224 &&
    splitey == 1184 &&
    floo == 2 &&
    route == 1 &&
    order_notice == 1
  ) {
    //物理教室
    imageMode(CENTER);
    if (hard == true) {
      image(QR2, splitex, splitey); //ハード
    } else {
      image(QR2, splitex, splitey); //イージー
    }
    imageMode(CORNER);
    if (
      confirm(
        "1回目はキャンセルを押し、QRコードを読み終わったらOKを押してください。"
      )
    ) {
      order_notice = 2;
    }
  } else if (
    splitex == 2144 &&
    splitey == 160 &&
    floo == 3 &&
    route == 1 &&
    order_notice == 2
  ) {
    //情報室
    imageMode(CENTER);
    if (hard == true) {
      image(QR3, splitex, splitey); //ハード
    } else {
      image(QR3, splitex, splitey); //イージー
    }
    imageMode(CORNER);
    if (
      confirm(
        "1回目はキャンセルを押し、QRコードを読み終わったらOKを押してください。"
      )
    ) {
      order_notice = 3;
    }
  } else if (
    splitex == 1376 &&
    splitey == 1184 &&
    floo == 1 &&
    route == 1 &&
    order_notice == 3
  ) {
    //地学教室
    imageMode(CENTER);
    if (hard == true) {
      image(QR4, splitex, splitey); //ハード
    } else {
      image(QR4, splitex, splitey); //イージー
    }
    imageMode(CORNER);
    if (
      confirm(
        "1回目はキャンセルを押し、QRコードを読み終わったらOKを押してください。"
      )
    ) {
      order_notice = 4;
    }
  } else if (
    splitex == 96 &&
    splitey == 288 &&
    floo == 3 &&
    route == 1 &&
    order_notice == 4
  ) {
    //1-6
    imageMode(CENTER);
    if (hard == true) {
      image(QR5, splitex, splitey); //ハード
    } else {
      image(QR5, splitex, splitey); //イージー
    }
    imageMode(CORNER);
    if (
      confirm(
        "1回目はキャンセルを押し、QRコードを読み終わったらOKを押してください。"
      )
    ) {
      order_notice = 5;
    }
  } else if (
    splitex == 2144 &&
    splitey == 1184 &&
    floo == 2 &&
    route == 1 &&
    order_notice == 5
  ) {
    //美術室
    imageMode(CENTER);
    if (hard == true) {
      image(QR6, splitex, splitey); //ハード
    } else {
      image(QR6, splitex, splitey); //イージー
    }
    imageMode(CORNER);
    if (
      confirm(
        "1回目はキャンセルを押し、QRコードを読み終わったらOKを押してください。"
      )
    ) {
      order_notice = 6;
    }
  } else if (
    splitex == 1184 &&
    splitey == 1440 &&
    floo == 1 &&
    route == 1 &&
    order_notice == 6
  ) {
    //葎
    imageMode(CENTER);
    if (hard == true) {
      image(QR7, splitex, splitey); //ハード
    } else {
      image(QR7, splitex, splitey); //イージー
    }
    imageMode(CORNER);
    if (
      confirm(
        "1回目はキャンセルを押し、QRコードを読み終わったらOKを押してください。"
      )
    ) {
      order_notice = 7;
    }
  } else if (
    splitex == 2144 &&
    splitey == 1184 &&
    floo == 1 &&
    route == 1 &&
    order_notice == 7
  ) {
    //工芸室
    imageMode(CENTER);
    if (hard == true) {
      image(QR8, splitex, splitey); //ハード
    } else {
      image(QR8, splitex, splitey); //イージー
    }
    imageMode(CORNER);
    if (
      confirm(
        "1回目はキャンセルを押し、QRコードを読み終わったらOKを押してください。"
      )
    ) {
      order_notice = 8;
    }
  } else if (
    splitex == 2144 &&
    splitey == 1184 &&
    floo == 3 &&
    route == 1 &&
    order_notice == 8
  ) {
    //音楽室
    imageMode(CENTER);
    if (hard == true) {
      image(QR9, splitex, splitey); //ハード
    } else {
      image(QR9, splitex, splitey); //イージー
    }
    imageMode(CORNER);
    if (
      confirm(
        "1回目はキャンセルを押し、QRコードを読み終わったらOKを押してください。"
      )
    ) {
      order_notice = 9;
    }
  } else if (
    splitex == 800 &&
    splitey == 736 &&
    floo == 1 &&
    route == 1 &&
    order_notice == 9
  ) {
    //中庭
    imageMode(CENTER);
    if (hard == true) {
      image(QR10, splitex, splitey); //ハード
    } else {
      image(QR10, splitex, splitey); //イージー
    }
    imageMode(CORNER);
    if (
      confirm(
        "1回目はキャンセルを押し、QRコードを読み終わったらOKを押してください。"
      )
    ) {
      window.location.href = "https://endonian92.github.io/cresits.html";
      order_notice = 10;
    }
  } else if (
    splitex == 864 &&
    splitey == 160 &&
    floo == 3 &&
    route == 2 &&
    order_natade == 0
  ) {
    //生徒A
    imageMode(CENTER);
    image(QR21, splitex, splitey);
    imageMode(CORNER);
    if (
      confirm(
        "1回目はキャンセルを押し、QRコードを読み終わったらOKを押してください。"
      )
    ) {
      order_natade = 1;
    }
  } else if (
    splitex == 1632 &&
    splitey == 160 &&
    floo == 3 &&
    route == 2 &&
    order_natade == 1
  ) {
    //生徒B
    imageMode(CENTER);
    image(QR22, splitex, splitey);
    imageMode(CORNER);
    if (
      confirm(
        "1回目はキャンセルを押し、QRコードを読み終わったらOKを押してください。"
      )
    ) {
      order_natade = 2;
    }
  } else if (
    splitex == 544 &&
    splitey == 160 &&
    floo == 3 &&
    route == 2 &&
    order_natade == 2
  ) {
    //生徒C
    imageMode(CENTER);
    image(QR23, splitex, splitey);
    imageMode(CORNER);
    if (
      confirm(
        "1回目はキャンセルを押し、QRコードを読み終わったらOKを押してください。"
      )
    ) {
      order_natade = 3;
    }
  } else if (
    splitex == 736 &&
    splitey == 160 &&
    floo == 1 &&
    route == 2 &&
    order_natade == 3
  ) {
    //生徒会室ってどこだっけ。
    imageMode(CENTER);
    image(QR24, splitex, splitey);
    imageMode(CORNER);
    if (
      confirm(
        "1回目はキャンセルを押し、QRコードを読み終わったらOKを押してください。"
      )
    ) {
      order_natade = 4;
    }
  } else if (
    splitex == 608 &&
    splitey == 160 &&
    floo == 1 &&
    route == 2 &&
    order_natade == 4
  ) {
    //生徒会室ってどこだっけ2。
    imageMode(CENTER);
    image(QR25, splitex, splitey);
    imageMode(CORNER);
    if (
      confirm(
        "1回目はキャンセルを押し、QRコードを読み終わったらOKを押してください。"
      )
    ) {
      order_natade = 5;
    }
  } else if (
    splitex == 672 &&
    splitey == 160 &&
    floo == 1 &&
    route == 2 &&
    order_natade == 5
  ) {
    //生徒会室ってどこだっけ3。
    imageMode(CENTER);
    image(QR26, splitex, splitey);
    imageMode(CORNER);
    if (
      confirm(
        "1回目はキャンセルを押し、QRコードを読み終わったらOKを押してください。"
      )
    ) {
      order_natade = 6;
    }
  } else if (
    splitex == 2016 &&
    splitey == 736 &&
    floo == 2 &&
    route == 2 &&
    order_natade == 6
  ) {
    //総務部前って確か生徒部のあたりだよね。
    imageMode(CENTER);
    image(QR27, splitex, splitey);
    imageMode(CORNER);
    if (
      confirm(
        "1回目はキャンセルを押し、QRコードを読み終わったらOKを押してください。"
      )
    ) {
      window.location.href = "https://endonian92.github.io/cresits.html";
      order_natade = 7;
    }
  } else if (
    splitex == 2144 &&
    splitey == 32 &&
    floo == 1 &&
    route == 3 &&
    order_religion == 0
  ) {
    //前庭書き忘れたし正面玄関前でいいよね。
    imageMode(CENTER);
    if (hard == true) {
      image(QR31, splitex, splitey); //ハード
    } else {
      image(QR31, splitex, splitey); //イージー
    }
    imageMode(CORNER);
    if (
      confirm(
        "1回目はキャンセルを押し、QRコードを読み終わったらOKを押してください。"
      )
    ) {
      if (hard == true){order_religion = 3;}else{order_religion = 1;}
    }
  } else if (
    splitex == 416 &&
    splitey == 1184 &&
    floo == 1 &&
    route == 3 &&
    order_religion == 1
  ) {
    //科学室側階段が何階かわかんないけどとりあえず一階にしときます。
    imageMode(CENTER);
    image(QR32, splitex, splitey);
    imageMode(CORNER);
    if (
      confirm(
        "1回目はキャンセルを押し、QRコードを読み終わったらOKを押してください。"
      )
    ) {
      order_religion = 2;
    }
  } else if (
    splitex == 2144 &&
    splitey == 1184 &&
    floo == 1 &&
    route == 3 &&
    order_religion == 2
  ) {
    //工芸室
    imageMode(CENTER);
    image(QR33, splitex, splitey);
    imageMode(CORNER);
    if (
      confirm(
        "1回目はキャンセルを押し、QRコードを読み終わったらOKを押してください。"
      )
    ) {
      order_religion = 3;
    }
  } else if (
    splitex == 352 &&
    splitey == 288 &&
    floo == 3 &&
    route == 3 &&
    order_religion == 3
  ) {
    //1-5
    imageMode(CENTER);
    if (hard == true) {
      image(QR34, splitex, splitey); //ハード
    } else {
      image(QR34, splitex, splitey); //イージー
    }
    imageMode(CORNER);
    if (
      confirm(
        "1回目はキャンセルを押し、QRコードを読み終わったらOKを押してください。"
      )
    ) {
      window.location.href = "https://endonian92.github.io/cresits.html";
      order_religion = 4;
    }
  } else {
    eve = 0;
  }
}
var order_notice = 0;
var order_notice_place = [
  [1376, 1184, 3],
  [224, 1184, 2],
  [2144, 160, 3],
  [1376, 1184, 1], //仮
  [96, 288, 3],
  [2144, 1184, 2],
  [1184, 1440, 1],
  [2144, 1184, 1],
  [2144, 1184, 3],
  [800, 736, 1],
];
var order_natade = 0;
var order_natade_place = [
  [864, 160, 3],
  [1632, 160, 3],
  [544, 160, 3],
  [736, 160, 1],
  [608, 160, 1],
  [672, 160, 1],
  [2016, 736, 2],
];
var order_religion = 0;
var order_religion_place = [
  [2144, 32, 1],
  [416, 1184, 1],
  [2144, 1184, 1],
  [352, 288, 3],
];

function navigate() {
  if (route == 0) {
    strokeWeight(4);
    stroke(1, 256, 0, 256);
    line(splitex, splitey, 96, 288);
    stroke(0, 0, 0, 256);
  } else if (route == 1) {
    strokeWeight(4);
    stroke(1, 256, 0, 256);
    line(
      splitex,
      splitey,
      order_notice_place[order_notice][0],
      order_notice_place[order_notice][1]
    );
    stroke(1, 1, 1, 256);
    textSize(32);
    text(
      "目的地の階は" + order_notice_place[order_notice][2] + "階",
      splitex,
      splitey - 35
    );
    stroke(0, 0, 0, 256);
  } else if (route == 2) {
    strokeWeight(4);
    stroke(1, 256, 0, 256);
    line(
      splitex,
      splitey,
      order_natade_place[order_natade][0],
      order_natade_place[order_natade][1]
    );
    stroke(1, 1, 1, 256);
    textSize(32);
    text(
      "目的地の階は" + order_natade_place[order_natade][2] + "階",
      splitex,
      splitey - 35
    );
    stroke(0, 0, 0, 256);
  } else if (route == 3) {
    strokeWeight(4);
    stroke(1, 256, 0, 256);
    line(
      splitex,
      splitey,
      order_religion_place[order_religion][0],
      order_religion_place[order_religion][1]
    );
    stroke(1, 1, 1, 256);
    textSize(32);
    text(
      "目的地の階は" + order_religion_place[order_religion][2] + "階",
      splitex,
      splitey - 35
    );
    stroke(0, 0, 0, 256);
  }
}
