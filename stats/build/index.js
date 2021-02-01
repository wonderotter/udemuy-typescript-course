"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var Summary_1 = require("./Summary");
var WinsAnalysis_1 = require("./analyzer/WinsAnalysis");
var ConsoleReport_1 = require("./reportTargets/ConsoleReport");
// DataReader 인터페이스를 만족하는 객체 만들기
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// MatchReader의 인스턴스를 만들고 DataReader 인터페이스를 만족시키는 객체 넘기기
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new ConsoleReport_1.ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
