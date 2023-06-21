/**
 * Text component is reusable for every case
 * @typedef {{
 * 0: "heading",
 * 1: "title",
 * 2: "subTitle",
 * 3: "label",
 * 4: "content"
 * }} TYPES
 * @param {{content: string, type: {keyof TYPES}, tag: string, fontSize: string, fontWeight: string, color: string, underline: boolean, emphasis: boolean }} args
 * @param args.content - text render content
 * @param args.type -  type of text whould be heading
 * @param args.tag - need to pass when text type heading for specify h1, h2 etc
 * @param args.fontSize - fontSize classname
 * @param args.fontWeight - text weight
 * @param args.color - text color
 * @param args.underline - value of text underline visible or not
 * @param args.emphasis - value of text style italic or not
 */

class TextComponent{
    create({ content, type, tag, fontSize, fontWeight, color, underline, strong, emphasis }){
        let output = content;
        if (emphasis) output = <em> {output} </em>;
        if (underline) output = <u> {output} </u>;
        if (strong) output = <strong> {output} </strong>;
    
        const headTags = {
            h1: <h1 style={{ fontWeight: fontWeight || "", color: color || "" }} className={`${type} ${fontSize}`} > {content} </h1> ,
            h2: <h2 style={{ fontWeight: fontWeight || "", color: color || "" }} className={`${type} ${fontSize}`} > {content} </h2> ,
            h3: <h3 style={{ fontWeight: fontWeight || "", color: color || "" }} className={`${type} ${fontSize}`} > {content} </h3> ,
            h4: <h4 style={{ fontWeight: fontWeight || "", color: color || "" }} className={`${type} ${fontSize}`} > {content} </h4>
        };
      
        if (["heading", "title", "subTitle"].includes(type)) return headTags[tag];
        else if (type === "label") return <label style={{ fontWeight: fontWeight || "", color: color || "" }} className={`${type} ${fontSize}`} > {output} </label> ;
        else if (type === "content") return  <p style={{ fontWeight: fontWeight || "", color: color || "" }} className={`${type} ${fontSize}`} > {output} </p>;
        else return output;
    }

}