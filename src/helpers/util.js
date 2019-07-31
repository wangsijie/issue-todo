module.exports.decideFontColor = background => {
    const red = parseInt(background.substr(0, 2), 16);
    const green = parseInt(background.substr(2, 2), 16);
    const blue = parseInt(background.substr(4, 2), 16);
    if ((red * 0.299 + green * 0.587 + blue * 0.114) > 186) {
        return '#000000';
    }
    return '#ffffff';
};
