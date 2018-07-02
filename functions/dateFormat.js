Date.prototype.formatDate = (string)=> {
    if(!string.length) {
        return;
    };
    let year = 'YYYY';  // 完整的年份 eg: 2018
    let fullMonth = 'MM'; // 完整的月份 eg:07
    let shortMonth = 'M'; // 简短月份 eg: 7
    let fullDay = 'DD'; // 完整日 eg: 02
    let shortDay = 'D'; // 简短日 eg: 2
    // 先处理传进来的字符串
    let separatorStr = separator(string, '/') || separator(string, '-'); // 分隔符 支持 / 与 - 注意：分隔符是必须的（后期优化可以单独）
    let fullString = string.split(separatorStr);
    let formatContainer = [];
    if (fullString.length > 3) {
        return; // 只能传递年月日三组时间格式
    };
    
    fullString.map((item, index)=> {
        switch (item) {
            case year:
                formatContainer.push(year);                
                break;
            case fullMonth:
                formatContainer.push(fullMonth);
                break;
            case shortMonth:
                formatContainer.push(shortMonth);
                break;
            case fullDay:
                formatContainer.push(fullDay);
                break;
            case shortDay:
                formatContainer.push(shortDay);
                break;
        }
    });
    console.log(formatContainer);



    function separator(string, separator) {
        // 查询使用的哪种分隔符
        if (!string || !separator) {
            return false;
        }
        if (string.indexOf(separator) > -1) {
            return separator;
        }
    }
}


let str = 'YYYY-MM-DD';
let date = new Date();
date.formatDate(str);