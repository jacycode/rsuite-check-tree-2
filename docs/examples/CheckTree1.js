import React from 'react';
import CheckTree from '../../src';
import treeData from '../data/treeData';


const CheckTree1 = props => (
  <div className="doc-example">
    <CheckTree
      defaultExpandAll
      data={treeData}
      height={300}
      defaultValue={['Dave']}
      onExpand={(activeNode, layer) => {
        console.log(activeNode, layer);
      }}
      onChange={(activeNode, layer, event) => {
        console.log(activeNode, layer, event);
      }}
    />
  </div>
);

export default CheckTree1;

