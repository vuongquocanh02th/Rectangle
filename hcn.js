let Rectangle = function(dai, rong) {
    this.dai = dai;
    this.rong = rong;

    this.getDai = function() {
        return this.dai;
    }
    this.getRong = function() {
        return this.rong;
    }
    this.getArea = function() {
        return this.dai * this.rong;
    }
    this.getPerimeter = function() {
        return 2 * (this.dai + this.rong);
    }
    //Ve hinh chu nhat len canvas
    this.draw = function(canvasContext) {
        canvasContext.fillStyle = 'blue';
        canvasContext.fillRect(100, 100, this.rong, this.dai);
    }
};
//Khai bao va khoi tao doi tuong Rectangle
let hcn = new Rectangle(150, 100);
//Hien thi hinh chu nhat len canvas
let canv = document.getElementById('cvHCN');
let ctx = canv.getContext('2d');

hcn.draw(ctx);

//Thay doi chieu dai va chieu rong
hcn.dai = 200;
hcn.rong = 120;

//In ra dien tich va chu vi
let area = hcn.getArea();
let perimeter = hcn.getPerimeter();

document.getElementById('in4').innerHTML = `
                          Dien tich: ${area}<br>
                          Chu vi: ${perimeter}<br>`;