"use strict";
exports.__esModule = true;
var Hero = /** @class */ (function () {
    function Hero() {
    }
    Hero.prototype.getCodenome = function () {
        return this.codenome;
    };
    Hero.prototype.setCodenome = function (codenome) {
        this.codenome = codenome;
    };
    Hero.prototype.getIdentidadeSecreta = function () {
        return this.identidadeSecreta;
    };
    Hero.prototype.setIdentidadeSecreta = function (identidadeSecreta) {
        this.identidadeSecreta = identidadeSecreta;
    };
    return Hero;
}());
exports.Hero = Hero;
