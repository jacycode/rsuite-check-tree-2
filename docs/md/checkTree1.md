### 关系检查
<!--start-code-->
```js
const CheckTree1 = props => (
    <CheckTree
      defaultExpandAll
      data={data}
      height={400}
      defaultValue={['Dave']}
      disabledItems={['disabled']}
      onExpand={(activeNode, layer) => {
        console.log(activeNode, layer);
      }}
      onSelect={(activeNode, layer) => {
        console.log(activeNode, layer);
      }}
      onScroll={(e) => {
        console.log(e.target);
      }}
      filterNode={(nodeData)=>{
        console.log('filterNode');
      }}
      filterNodes={(nodeDatas)=>{
      	console.log('filterNodes');
      }}
    />
);
ReactDOM.render(<CheckTree1 />);
```
<!--end-code-->
