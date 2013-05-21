var e = module.exports
var isArray = require('util').isArray


e.problem1 = function get_last_element(list) {
  if (isArray(list) && list.length) {
    return list[list.length - 1]
  }
}

e.problem2 = function get_second_from_last(list) {
  if (isArray(list) && list.length + 1) {
    return list[list.length - 2]
  }
}

e.problem3 = function element_at(k, list) {
  if (isArray(list) && k < list.length) {
    return list[k]
  }
}

e.problem4 = function list_length(list) {
  if (isArray(list)) {
    return list.length
  }
}

e.problem5 = function reverse_list(list) {
  if (isArray(list)) {
    return list.reverse()
  }
}

e.problem6 = function is_palindrome(list) {
  var end = list.length - 1
  var begin = 0

  while (begin <= end) {
    // compare ends i.e. 1 == 7; 2 == 6 etc.
    if (list[begin] !== list[end]) {
      return false
    }
    begin++
    end--
  }
  return true
}

e.problem7 = function flatten(list) {
  if (isArray(list)) {
    return list.reduce(function squash(total, i) {
      if (isArray(i)) {
        // recurse on nested array
        total = i.reduce(squash, total)
      } else {
        // 
        total.push(i)
      }
      return total
    }, [])
  }
}

e.problem8 = function compress(thing) {
  if (isArray(thing)) {
    return dedupe_array(thing)
  } else if (typeof thing === 'string') {
    // turn it into an array, compress, join it back to a string
    return dedupe_array(thing.split('')).join('')
  }

  // work done here
  function dedupe_array(list) {
    var i = list.length
    var clean = []

    while(i--) {
      if (list[i] !== list[i-1]) {
        clean.unshift(list[i])
      }
    }
    return clean
  }
}

e.problem9 = function pack(list) {
  var i = list.length
  var putout = []
  var clean = []

  while(i--) {
    clean.unshift(list[i])

    if (list[i] !== list[i-1]) {
      putout.unshift(clean)
      var clean = []
    }
  }

  return putout
}

e.problem10 = function encode(list) {
  return e.problem9(list).map(function(i) {
    return [i.length, i[0]]
  })
}

e.problem11 = function encode_modified (list) {
  return e.problem9(list).map(function(i) {
    return i.length > 1 ?
      [i.length, i[0]]  :
      i[0]
  })
}

e.problem12 = function decode_modiffied (list) {
  return list.reduce(function(putout, i) {
    return putout + (i.length === 1 ?
                     i              :
                     (new Array(i[0] + 1).join(i[1])))
  }, '')
}

e.problem13 = function encode_direct (list) {
  var i = list.length
  var putout = []
  var c = 0

  while(i--) {
    c += 1

    if (list[i] !== list[i-1]) {
      if (c === 1) {
        putout.unshift(list[i])
      } else {
        putout.unshift([c, list[i]])
      }

      c = 0
    }
  }

  return putout

}

e.problem14 = function dupli(list) {
  var putout = isArray(list) ? [] : ''
  var l = list.length

  ;for(var i = 0; i < l; i++) {
    putout = putout.concat(list[i], list[i])
  }

  return putout
}

e.problem15 = function repli (list, count) {
  var putout = isArray(list) ? [] : ''
  var l = list.length

  ;for(var i = 0; i < l; i++) {
    ;for(var c = 0; c < count; c++) {
      putout = putout.concat(list[i])
    }
  }

  return putout
}

e.problem16 = function dropEvery(list, every) {
  var putout = isArray(list) ? [] : ''
  var l = list.length

  if (!(every > 0 )) {
    return list
  }

  ;for(var i = 0; i < l ; i++) {
    if ((i + 1) % every) {
      putout = putout.concat(list[i])
    }
  }

  return putout
}

e.problem17 = function split (list, at) {
  var isA = isArray(list)
  var firstHalf  = isA ? [] : ''
  var secondHalf = isA ? [] : ''
  var l = list.length

  if (!(at > 0)) {
    return [firstHalf, list]
  } else if (at >= l) {
    return [list, secondHalf]
  }

  ;for(var i = 0; i < l; i++) {
    if (i < at) {
      firstHalf = firstHalf.concat(list[i])
    } else {
      secondHalf = secondHalf.concat(list[i])
    }
  }

  return [firstHalf, secondHalf]
}

e.problem18 = function slice(list, start, stop) {
  var putout  = isArray(list) ? [] : ''

  if (!(start > 0)) {
    return false
  } else if (!(stop > 0)) {
    return false 
  } else if (start > stop) {
    return false
  } else if (start > list.length) {
    return false
  }

  if (stop > list.length) {
    stop = list.length
  }

  ;for(var i = start; i <= stop; i++) {
    putout = putout.concat(list[i - 1])
  }

  return putout
}

e.problem19 = function rot(list, n) {
  if (n > 0) {
    while(n--) {
      list.push(list.shift())
    }
  } else if (n < 0) {
    while(n++) {
      list.unshift(list.pop())
    }
  }

  return list
}

e.problem20 = function remove_at (list, at) {
  var gone  = isArray(list) ? [] : ''
  var yanked
  var l = list.length

  if (at > l) {
    return false
  }
  if (!(at > 0)) {
    return false
  }

  at--  // zero inexed
  ;for(var i = 0; i < l; i++) {
    if (i === at) {
      yanked = list[i]
    } else {
      gone = gone.concat(list[i])
    }
  }

  return [yanked, gone]
}

e.problem21 = function insert_at (insert, into, at) {
  var putout = isArray(into) ? [] : ''
  var l = into.length

  if(!(at > 0)) {
    return false
  }
  if (at > l) {
    return into.concat(insert)
  }

  at-- // zero indexed
  ;for(var i = 0; i < l; i++) {
    if (i === at) {
      putout = putout.concat(insert)
    }
    putout = putout.concat(into[i])
  }

  return putout
}

e.problem22 = function range (start, stop) {

  var putout = []
  if (start <= stop) {
    ;for(var i = start; i <= stop; i++) {
      putout.push(i)
    }
  } else if (start > stop) {
    ;for(var i = start; i >= stop; i--) {
      putout.push(i)
    }
  }

  return putout
}
