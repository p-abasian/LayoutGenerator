import React from 'react';
function Layout(data) {

    return data.layoutArray.map((item)=>{
        const array = [];

        for (let i =0; i < item.count; i++) {

            array.push(
                <div key={i} className={item.size}>{i}</div>
            );
        }

        return array;
    });
}
export default Layout;