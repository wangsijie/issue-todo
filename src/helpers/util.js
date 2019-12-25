import moment from 'moment';
import _ from 'lodash';

export const decideFontColor = background => {
    const red = parseInt(background.substr(0, 2), 16);
    const green = parseInt(background.substr(2, 2), 16);
    const blue = parseInt(background.substr(4, 2), 16);
    if ((red * 0.299 + green * 0.587 + blue * 0.114) > 186) {
        return '#000000';
    }
    return '#ffffff';
};

const metaRegexp = /^```\r\n\[meta\]([\s\S]*)\[\/meta\]\r\n```/;
export const parseMeta = body => {
    if (!body) {
        return {};
    }
    const match = metaRegexp.exec(body);
    const result = {};
    if (match) {
        try {
            const meta = JSON.parse(match[1]);
            if (meta.postpone) {
                result.postpone = moment(meta.postpone);
            }
        } catch (e) { }
    }
    return result;
}
export const stringifyMeta = (body, _meta) => {
    const meta = _.clone(_meta);
    if (meta.postpone) {
        meta.postpone = moment(meta.postpone).format('YYYY-MM-DD HH:mm:ss');
    }
    const result = `\`\`\`\r\n[meta]\r\n${JSON.stringify(meta, null, 2)}\r\n[/meta]\r\n\`\`\``;
    if (metaRegexp.test(body)) {
        return body.replace(metaRegexp, result);
    } else {
        return result + '\r\n' + (body || '');
    }
}
