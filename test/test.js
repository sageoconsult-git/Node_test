var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where the program is running.

var server = supertest.agent("http://localhost:3000");

// UNIT test begin

describe("SAMPLE unit test",function(){

  // #1 should return home page
  it("should return home page",function(done){
    // calling home page
    server
    .get("/")
    .expect("Content-type",/text/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      done();
    });
  });

   // #2 should return About us page
 it("should return About page",function(done){
    // calling home page
    server
    .get("/pages/about.html")
    .expect("Content-type",/text/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      done();
    });
  });


   // #3 should return careers page
 it("should return Careers page",function(done){
    // calling home page
    server
    .get("/pages/careers.html")
    .expect("Content-type",/text/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      done();
    });
  });


    // #4 should return Blog page
 it("should return Blog page",function(done){
    // calling home page
    server
    .get("/pages/blog.html")
    .expect("Content-type",/text/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      done();
    });
  });


    // #5 should return Services page
 it("should return Services page",function(done){
    // calling home page
    server
    .get("/pages/services.html?sn=dataserv#serviceArea")
    .expect("Content-type",/text/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      done();
    });
  });


    // #6 should return Industries page
 it("should return Industries page",function(done){
    // calling home page
    server
    .get("/pages/industry.html")
    .expect("Content-type",/text/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      done();
    });
  });


    // #7 should return contact Us page
 it("should return Contact page",function(done){
    // calling home page
    server
    .get("/pages/contact.html")
    .expect("Content-type",/text/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      done();
    });
  });

});



