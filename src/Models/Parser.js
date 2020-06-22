class Parser {
  constructor() {}
  
  interpretasor(query) {
    
    const regex1 = /\s*select\s+([*])\s+from\s+(\w+)$/g;
    const regex2 = /\s*select\s+(\w+)\s+from\s+(\w+)\s*$/g;
    const regex3 = /\s*select\s+(\w+)\s*,\s*(\w+)\s+from\s+(\w+)\s*$/g;
    const regex4 = /\s*select\s+([*])\s+from\s+(\w+)\s+where\s+(\w+)\s*([<>!]{0,1})([=]{0,1})\s*(\d+)\s*$/g;
    const regex5 = /\s*select\s+(\w+)\s+from\s+(\w+)\s+where\s+(\w+)\s*([<>!]{0,1})([=]{0,1})\s*(\d+)\s*$/g;
    const regex6 = /\s*select\s+(\w+)\s*,\s*(\w+)\s+from\s+(\w+)\s+where\s+(\w+)\s*([<>!]{0,1})([=]{0,1})\s*(\d+)\s*$/g;
    const regex7 = /\s*select\s+(\w+)\s+from\s+(\w+)\s+where\s+(\w+)\s*([<>!]{0,1})([=]{0,1})\s*(\w+)\s*$/g;
    const regex8 = /\s*select\s+(\w+)\s*,\s*(\w+)\s+from\s+(\w+)\s+(\w+)\s*,\s*(\w+)\s+(\w+)\s+where\s+(\w+)\s*([<>=])\s*(\d+)\s+and\s+(\w+\.\w+)\s*([<>=])\s*(\w+\.[a-zA-Z]*$)\s*$/g;
    
    var queryy =""
    
    if ((queryy = regex1.exec(query))) {
      console.log(query);
      console.log(regex1.exec(query));
      let groups = [];
      var m = regex1.exec(query);
      if (m == null) {
        return "nao bateu";
      } else {
        for (var i = 0; i < m.length; i++) {
          groups[i] = m[i];
        }
      }
      return groups;
    } else if ((queryy = regex2.exec(query))) {
      console.log(query);
      console.log(regex2.exec(query));
      let groups = [];
      var m = regex2.exec(query);
      if (m == null) {
        return "nao bateu";
      } else {
        for (var i = 0; i < m.length; i++) {
          groups[i] = m[i];
        }
      }
      return groups;
    } else if ((queryy = regex3.exec(query))) {
      console.log(query);
      console.log(regex3.exec(query));
      let groups = [];
      var m = regex3.exec(query);
      if (m == null) {
        return "nao bateu";
      } else {
        for (var i = 0; i < m.length; i++) {
          groups[i] = m[i];
        }
      }
      return groups;
    } else if ((queryy = regex4.exec(query))) {
      console.log(query);
      console.log(regex4.exec(query));
      let groups = [];
      var m = regex4.exec(query);
      if (m == null) {
        return "nao bateu";
      } else {
        for (var i = 0; i < m.length; i++) {
          groups[i] = m[i];
        }
      }
      return groups;
    } else if ((queryy = regex5.exec(query))) {
      console.log(query);
      console.log(regex5.exec(query));
      let groups = [];
      var m = regex5.exec(query);
      if (m == null) {
        return "nao bateu";
      } else {
        for (var i = 0; i < m.length; i++) {
          groups[i] = m[i];
        }
      }
      return groups;
    } else if ((queryy = regex6.exec(query))) {
      console.log(query);
      console.log(regex6.exec(query));
      let groups = [];
      var m = regex6.exec(query);
      if (m == null) {
        return "nao bateu";
      } else {
        for (var i = 0; i < m.length; i++) {
          groups[i] = m[i];
        }
      }
      return groups;
    } else if ((queryy = regex7.exec(query))) {
      console.log(query);
      console.log(regex7.exec(query));
      let groups = [];
      var m = regex7.exec(query);
      if (m == null) {
        return "nao bateu";
      } else {
        for (var i = 0; i < m.length; i++) {
          groups[i] = m[i];
        }
      }
      return groups;
    } else {
      return "Expressão invalida";
    }
  }
}

module.exports = Parser;
