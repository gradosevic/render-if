# render-if

> React component for adding rendering conditions

## Example:


```javascript
render(){
  var condition = true;
      return (
          <div>
              {RenderIf(condition,
                  ()=> {
                      return <div>Condition is TRUE</div>;
                  },
                  ()=>{
                      return <div>Condition is FALSE</div>;
                  }
              )}
          </div>
        );
    }
```
