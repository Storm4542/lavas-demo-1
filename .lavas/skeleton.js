import Vue from 'vue';

import Skeleton from '/Users/zhengtianyu/Desktop/temp/lavas-demo-1/lavas-demo-1/core/Skeleton.vue';


export default new Vue({
    components: {
        
        Skeleton,
        
    },
    template: `
        <div>
            
            <skeleton id="skeleton" style="display:none"/>
            
        </div>
    `
});
