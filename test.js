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

function match(m) { return function(n) { return n == m }}

function ok(val) { console.log("worked: " + val) }

ok(search(sample, match("hello"))[0].path == "3,1,1,1,b,2,c")
ok(search(sample, match("hello"), 6).length == 0)
ok(search(sample, match("hello"), 7) instanceof Object)
ok(search(sample, match("a"))[0].path == "3,1,1,1")

ok(searchEqual(sample, "a")[0].path == "3,1,1,1")
ok(searchEqual(sample, 3)[0].path == "0,2")

ok(searchLike(sample, "eLl")[0].path == "3,1,1,1,b,2,c")
ok(searchLike(sample, "a hEllO to you")[0].path == "3,1,1,1,b,2,c")
