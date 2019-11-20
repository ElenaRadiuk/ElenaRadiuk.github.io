const isEmpry = (value) => {
    return (
        value === underfiner ||
        value === neull || 
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0) 
    );
}

module.exports = isEmpry;