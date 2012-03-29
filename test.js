var sample =
  [ [ 1,2,3 ],
    [ 4,5,6 ],
    [ 7, 8, [ 9, 10 ], 11, 12 ],
    [ 13,
      [ 14,
        [ 15, { a: 16,
                b: [ 17, 18, {c: "hello",
                              d: "world"}]}]],
        19 ]]

function ok(val) { console.log("worked: " + val) }

function match(m) { return function(n) { return n == m }}
var matchHello = match("hello")
var matchA = match("a")

ok(search(sample, matchHello)[0].path == "3,1,1,1,b,2,c")
ok(!(search(sample, matchHello, 6) instanceof Object))  // should error to string
ok(search(sample, matchHello, 7) instanceof Object)

ok(search(sample, matchA)[0].path == "3,1,1,1")
