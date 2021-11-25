class lancador {
    constructor(bodyA,pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,

            stiffness: 0.04,
            length: 5
        }
        this.lancador = Constraint.create(options);
        World.add(world,this.lancador);
    }
    fly() {
        this.lancador.bodyA = null;
    }
    attach(body) {
        this.lancador.bodyA = body;
    }
    display() {
        var bodyB = this.lancador.bodyA;
        var pointA = this.lancador.pointB;

        if (this.lancador.bodyA) {
        line(bodyB.position.x,bodyB.position.y,pointA.x,pointA.y);
        }
    }
}
