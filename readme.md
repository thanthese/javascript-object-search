## The problem

Objects in modern javascript applications can grow complex.  Oftentimes you
*know* that a particular value is rolling around somewhere, but you can't find
it.

## The solution

The function `search` will crawl your object looking for your value (or key).

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

## Additional helpers

- `searchEqual` works just like `search` except it takes an exact value to
  match rather than a predicate.

- `searchLike` works just like `search` only it takes a string to fuzzy-match
  on rather than a predicate.  (Fuzzy matching here means putting globbing
  patterns on either end of everything, as well as being case-insensitive.)

## Dependencies

None, other than a sane browser.
