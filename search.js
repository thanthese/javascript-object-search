/**
 * Search a complex, nested javascript object for values matching a predicate
 * function.
 *
 * maxDepth is optional.  (Use it to avoid hanging on recursive strutures.)
 *
 * Returns an array of results.  Each element is an object with properties:
 *   - object : a found matching value
 *   - path   : an array describing how to reach that value in the object
 */
function search(object, predicate, maxDepth) {

  /**
   * Make a node for the queue.
   */
  function makeNode(object, path) {
    return { object: object, path: path }
  }

  /**
   * Like array's push(), but returns a copy and doesn't change the original
   * array.
   */
  function safePush(arr, newState) {
    var copy = arr.slice(0)
    copy.push(newState)
    return copy
  }

  var depth = 0
  var matches = []
  var queue = [ makeNode(object, []) ]

  while( queue.length > 0 ) {

    ++depth
    if( maxDepth && depth > maxDepth + 1 )
      return "Max depth of " + depth + " met."

    var newQueue = []
    for( var i = 0; i < queue.length; ++i ) {

      var node = queue[i]
      var obj = node.object
      var path = node.path

      if( obj instanceof Array )
        for( var j = 0; j < obj.length; ++j )
          newQueue.push(makeNode(obj[j], safePush(path, j)))

      else if ( obj instanceof Object )
        for( var k in obj )
          newQueue.push(makeNode(obj[k], safePush(path, k)))

      else if( predicate(obj) )
        matches.push(node)
    }
    queue = newQueue
  }
  return matches
}