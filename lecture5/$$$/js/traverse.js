function $$$(selector) {
      var result = traverse(selector, document, [])
      return result
        function traverse(selector, element, result) {
          if (b(selector, element)) {
              result.push(element)
            }
          if (element && element.children) {
            for (var i = 0; i < element.children.length; i++) {
              traverse(selector, element.children[i], result)
            }
          }
          return result
        }

        function b(selector, element) {
          var chunks = selector.split(" ")
          var reversed = chunks.reverse()
          var row = []
          var i = 0
          reversed.forEach(function(item) {
            row[i] = selectors(item, element)
            if (row[i] == false)
              return element[i++]
          })
          return row.includes(false) || row.length != chunks.length ? null : element
        }
        function selectors(a, element) {
                switch(''){
              case (a.includes("#")): 
                return (element) && (element["id"]) && element["id"].value === a.replace("#")
              
              case (a.includes(".")):
                return (element.classList) && element.classList.contains(a.replace("."))
              default:
                return (element.tagName) && element.tagName.toLowerCase() === a
        }
    }
}
