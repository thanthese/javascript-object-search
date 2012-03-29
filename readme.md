## The problem

Objects in modern javascript applications can grow complex.  Oftentimes you
*know* that a particular value is rolling around somewhere, but you can't find
it.

## The solution

This project exposes a single function, `search`, that will crawl your object
looking for your value.

    search(nested object, predicate function, max depth <optional>)

## Example usage

    var nestedObj = [1, 2, [3, 4, {a: [5, 6], b: "foo"}, 7], 8, 9]
    var predFn = function(n) { return n == 6 }
    search(nestedObj, predFn)

returns

    [
      { object : 6
      , path   : [ 2, 2, "a", 1 ] }
    ]

## Dependencies

None, other than a sane browser.
