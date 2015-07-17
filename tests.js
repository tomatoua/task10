describe('tests for "Man"', function() {

  afterEach(function() {
    man = undefined;
  });


  it('[01] testing [not throw] correct initialization', function() {
    expect(function () {
      var man = Object.create(Man).constructor('Bob', 33);
    }).not.toThrow();
  });

  it('[02] testing [throw] initialization with incorrect parameter "age"', function() {    
  
  expect(function () {
      var man = Object.create(Man).constructor('Bob', 'thirty three');
    }).toThrow();
  });

  it('[03] testing [throw] initialization with undefined parameter "name"', function() {  
    expect(function () {  
      var man = Object.create(Man).constructor(undefined, 33);
    }).toThrow();
  });

  it('[04] testing [throw] initialization with empty parameter "name"', function() {  
    expect(function () {  
      var man = Object.create(Man).constructor('', 33);
    }).toThrow();
  });

  it('[05] testing [throw] initialization with incorrect parameters count', function() {  
    expect(function () {  
      var man = Object.create(Man).constructor('Bob', 33, 'love beer');
    }).toThrow();
  });

  it('[06] testing [throw] initialization with incorrect parameters count', function() {  
    expect(function () {  
      var man = Object.create(Man).constructor('Bob');
    }).toThrow();
  });

  it('[07] testing property "age" to be a number', function() {
    var man = Object.create(Man).constructor('Bob', 33);
    expect(man.age).toEqual(jasmine.any(Number));
  });

  it('[08] testing property "age" equal', function() {
    var man = Object.create(Man).constructor('Bob', 33);
    expect(man.age).toEqual(33);
  });

  it('[09] testing property "name" to be defined', function() {
    var man = Object.create(Man).constructor('Bob', 33);
    expect(man.name).toBeDefined()
  });

  it('[10] testing function "live()" to contains property "name" of man', function() {
    var man = Object.create(Man).constructor('Bob', 33);
    expect(man.live()).toContain("Bob");
  });

  it('[11] testing function "live()"', function() {
    var man = Object.create(Man).constructor('Bob', 33);
    expect(man.live()).toEqual('Bob lives on the Earth 33 years');
  });

  it('[12] testing function "_duckTypeThis()"', function() {
    var man = Object.create(Man).constructor('Bob', 33);
    expect(man._duckTypeThis()).toEqual('Man');
  });

});


describe('tests for "Student"', function() {

  afterEach(function() {
    stundet = undefined;
  });


	it('[01] testing [not throw] correct initialization', function() {
    expect(function () {
      var student = Object.create(Student).constructor('Jack', 21);
    }).not.toThrow();
  });

 	it('[02] testing [throw] initialization with incorrect parameter "age"', function() {  	
    expect(function () {
      var student = Object.create(Student).constructor('Jack', 'twenty one');
    }).toThrow();
	});

 	it('[03] testing [throw] initialization with undefined parameter "name"', function() {  
 		expect(function () {	
 			var student = Object.create(Student).constructor(undefined, 21);
 		}).toThrow();
	});

	it('[04] testing [throw] initialization with empty parameter "name"', function() {  
 		expect(function () {	
 			var student = Object.create(Student).constructor('', 21);
 		}).toThrow();
	});

 	it('[05] testing [throw] initialization with incorrect parameters count', function() {  
 		expect(function () {	
 			var student = Object.create(Student).constructor('Jack', 21, 'very lazy');
 		}).toThrow();
	});

	it('[06] testing [throw] initialization with incorrect parameters count', function() {  
 		expect(function () {	
 			var student = Object.create(Student).constructor('Jack');
 		}).toThrow();
	});

  it('[07] testing property "age" to be a number', function() {
    var student = Object.create(Student).constructor('Jack',  21);
    expect(student.age).toEqual(jasmine.any(Number));
  });

  it('[08] testing property "age" equal', function() {
    var student = Object.create(Student).constructor('Jack',  21);
    expect(student.age).toEqual(21);
  });

  it('[09] testing property "name" to be defined', function() {
    var student = Object.create(Student).constructor('Jack',  21);
    expect(student.name).toBeDefined()
  });

  it('[10] testing function "live()" to contains property "name" of student', function() {
    var student = Object.create(Student).constructor('Jack',  21);
    expect(student.live()).toContain("Jack");
  });

  it('[11] testing function "live()"', function() {
    var student = Object.create(Student).constructor('Jack',  21);
    expect(student.live()).toEqual('Jack lives on the Earth 21 years');
  });

  it('[12] testing function "study()"', function() {
    var student = Object.create(Student).constructor('Jack', 21);
    expect(student.study()).toEqual('Jack studies 14 years');
  });

  it('[13] testing function "_duckTypeThis()"', function() {
    var student = Object.create(Student).constructor('Jack', 21);
    expect(student._duckTypeThis()).toEqual('Student');
  });

});


describe('tests for "Professor"', function() {

  afterEach(function() {
    professor = undefined;
  });


  it('[01] testing [not throw] correct initialization', function() {
    expect(function () {
      var professor = Object.create(Professor).constructor('Mr. Jones', 70, 'e=mc2');
    }).not.toThrow();
  });

  it('[02] testing [throw] initialization with incorrect parameter "age"', function() {   
    expect(function () {
      var professor = Object.create(Professor).constructor('Mr. Jones', 'seventy', 'e=mc2');
    }).toThrow();
  });

  it('[03] testing [throw] initialization with undefined parameter "name"', function() {  
    expect(function () {  
      var professor = Object.create(Professor).constructor(undefined, 70, 'e=mc2');
    }).toThrow();
  });

  it('[04] testing [throw] initialization with empty parameter "name"', function() {  
    expect(function () {  
      var professor = Object.create(Professor).constructor('', 70, 'e=mc2');
    }).toThrow();
  });

  it('[05] testing [throw] initialization with incorrect parameters count', function() {  
    expect(function () {  
      var professor = Object.create(Professor).constructor('Mr. Jones', 70, 'e=mc2', 'angry');
    }).toThrow();
  });

  it('[06] testing [throw] initialization with incorrect parameters count', function() {  
    expect(function () {  
      var professor = Object.create(Professor).constructor('Mr. Jones');
    }).toThrow();
  });

  it('[07] testing property "age" to be a number', function() {
    var professor = Object.create(Professor).constructor('Mr. Jones', 70, 'e=mc2');
    expect(professor.age).toEqual(jasmine.any(Number));
  });

  it('[08] testing property "age" equal', function() {
    var professor = Object.create(Professor).constructor('Mr. Jones', 70, 'e=mc2');
    expect(professor.age).toEqual(70);
  });

  it('[09] testing property "name" to be defined', function() {
    var professor = Object.create(Professor).constructor('Mr. Jones', 70, 'e=mc2');
    expect(professor.name).toBeDefined()
  });

  it('[10] testing function "live()" to contains property "name" of student', function() {
    var professor = Object.create(Professor).constructor('Mr. Jones', 70, 'e=mc2');
    expect(professor.live()).toContain('Mr. Jones');
  });

  it('[11] testing function "live()"', function() {
    var professor = Object.create(Professor).constructor('Mr. Jones', 70, 'e=mc2');
    expect(professor.live()).toEqual('Mr. Jones lives on the Earth 70 years');
  });

  it('[12] testing function "teach()"', function() {
    var professor = Object.create(Professor).constructor('Mr. Jones', 70, 'e=mc2');
    expect(professor.teach()).toEqual('Learn it: e=mc2');
  });

  it('[13] testing function "research()"', function() {
    var professor = Object.create(Professor).constructor('Mr. Jones', 70, 'e=mc2');
    expect(professor.research()).toContain(professor.something);
  });

  it('[14] testing function "_duckTypeThis()"', function() {
    var professor = Object.create(Professor).constructor('Mr. Jones', 70, 'e=mc2');
    expect(professor._duckTypeThis()).toEqual('Professor');
  });

});