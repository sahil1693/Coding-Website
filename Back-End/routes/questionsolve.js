// const router=require('express').Router();
var path = require('path');
var Router = require('express').Router();
var compiler = require('compilex');
var compiler = require('compilex');
var express = require('express');
var Run = require('../models/question.model');
var option = { stats: true };
compiler.init(option);
Router.post('/', async (req, res) => {
    var code = req.body.code;
    var input = req.body.input;
    var inputRadio = req.body.inputRadio;
    var lang = req.body.lang;
    var questionname = req.body.questionname;
    var type=req.body.type;
    var arr=[];
    if (lang === "C" ) {
        if (inputRadio == 'true') {
            var envData = { OS: "linux", cmd: "gcc" };
            compiler.compileCPPWithInput(envData, code, input, (data) => {
                if (data.error) {
                    res.send(data.error);
                }
                else {
                    res.send(data.output);
                }
            });
        }
        else if(type){
            var envData = { OS: "linux", cmd: "gcc" };
            compiler.compileCPP(envData, code, (data) => {
                if (data.error) {
                    res.send(data.error);
                }
                else {
                    res.send(data.output);
                }
            });
        }
        else {
            var i = 0;
            Run.find({ questionname: questionname }).then(exer => {
                exer[0].test.map((input1) => {
                    const a = i;
                    const input2 = input1;
                    i++;
                    var envData = { OS: "linux", cmd: "gcc" };
                    compiler.compileCPPWithInput(envData, code, input2, (data) => {
                        if (data.error) {
                            arr.push(false);
                        }
                        else {
                            if (data.output == exer[0].output[a]) {
                                arr.push(true);
                            }
                            else{
                                arr.push(false);
                            }
                        }
                    });

                })

                

            })
                .catch((err) => {
                    res.sendstatus(err).json('Error: ' + err)
                });
                
                setTimeout(()=>res.send(arr),3000);
        }
    }
    if (lang === "C++") {
    if (inputRadio == 'true') {
            var envData = { OS: "linux", cmd: "g++" };
            compiler.compileCPPWithInput(envData, code, input, (data) => {
                if (data.error) {
                    res.send(data.error);
                }
                else {
                    res.send(data.output);
                }
            });
        }
        else if(type){
            var envData = { OS: "linux", cmd: "g++" };
            compiler.compileCPP(envData, code, (data) => {
                if (data.error) {
                    res.send(data.error);

                }
                else {
                    res.send(data.output);
                }
            });
        }
        else {
            var i = 0;
            Run.find({ questionname: questionname }).then(exer => {
                exer[0].test.map((input1) => {
                    const a = i;
                    const input2 = input1;
                    i++;
                    var envData = { OS: "linux", cmd: "g++" };
                    compiler.compileCPPWithInput(envData, code, input2, (data) => {
                        if (data.error) {
                            arr.push(false);
                        }
                        else {
                            if (data.output == exer[0].output[a]) {
                                arr.push(true);
                            }
                            else{
                                arr.push(false);
                            }
                        }
                    });

                })

                

            })
                .catch((err) => {
                    res.sendstatus(err).json('Error: ' + err)
                });
                
               setTimeout(()=>res.send(arr),3000);
        }
        
    }
    if (lang === "Java") {
         if (inputRadio == 'true') {
            var envData = { OS: "linux" };
            compiler.compileJavaWithInput(envData, code, input, (data) => {
                if (data.error) {
                    res.send(data.error);
                }
                else {
                    res.send(data.output);
                }
            });
        }
        else if(type){
            var envData = { OS: "linux" };
            compiler.compileJava(envData, code, (data) => {
                if (data.error) {
                    res.send(data.error);
                }
                else {
                    res.send(data.output);
                }
            });
        }
        else {
            var i = 0;
            Run.find({ questionname: questionname }).then(exer => {
            
                exer[0].test.map((input1) => {
                    const a = i;
                    const input2 = input1;
                    i++;
                    var envData = { OS: "linux" };
                    compiler.compileJavaWithInput(envData, code, input2, (data) => {
                        if (data.error) {
                            arr.push(false);
                        }
                        else {
                            if (data.output == exer[0].output[a]) {
                                arr.push(true);
                            }
                            else{
                                arr.push(false);
                            }
                        }
                    });

                })  

            })
                .catch((err) => {
                    res.sendstatus(err).json('Error: ' + err)
                });
                
               setTimeout(()=>{
               return res.send(arr)},10000);
        }

    }


    if (lang === "Python") {
        if (inputRadio == 'true') {
            var envData = { OS: "linux" };
            compiler.compilePythonWithInput(envData, code, input, (data) => {
                if (data.error) {
                    res.send(data.error);
                }
                else {
                    res.send(data.output);
                }
            });
        }
        else if(type){
            var envData = { OS: "linux" };
            compiler.compilePython(envData, code, (data) => {
                if (data.error) {
                    res.send(data.error);
                }
                else {
                    res.send(data.output);
                }
            });
        }
        else {
            var i = 0;
            Run.find({ questionname: questionname }).then(exer => {
            
                exer[0].test.map((input1) => {
                    const a = i;
                    const input2 = input1;
                    i++;
                    var envData = { OS: "linux" };
                    compiler.compilePythonWithInput(envData, code, input2, (data) => {
                        if (data.error) {
                            arr.push(false);
                        }
                        else {
                            if (data.output == exer[0].output[a]) {
                                arr.push(true);
                            }
                            else{
                                arr.push(false);
                            }
                        }
                    });

                })  

            })
                .catch((err) => {
                    res.sendstatus(err).json('Error: ' + err)
                });
                
               setTimeout(()=>{
               return res.send(arr)},5000);
        }
    }
})
module.exports = Router;
