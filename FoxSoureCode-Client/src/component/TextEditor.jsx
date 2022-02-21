import React, { useEffect } from "react";
import editorStyles from "./editorStyles.module.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

const TextEditor = ({ editorState, setEditorState, setContent }) => {

    // Manage the output
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    const markup = draftToHtml(rawContentState);

    // Editor handle change
    const onEditorStateChange = (editorState) => {
        // console.log(
        //     JSON.stringify(convertToRaw(editorState.getCurrentContent()), null, 2)
        // );
        setEditorState(editorState);
        setContent(markup)
    };

    // upload image call back function
    function uploadImageCallBack(file) {
        return new Promise((resolve, reject) => {
            if (file) {
                let reader = new FileReader();
                reader.onload = (e) => {
                    resolve({ data: { link: e.target.result } });
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Font list
    const fontList = ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana', 'JosefinSans-Bold']




    return (
        <div className={editorStyles.editor}>
            <Editor
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
                hashtag={{
                    separator: ' ',
                    trigger: '#',
                }}
                toolbar={
                    {
                        options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'image', /*'remove',*/ 'history'],
                        inline: {
                            inDropdown: false,
                            className: undefined,
                            component: undefined,
                            dropdownClassName: undefined,
                            options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace', 'superscript', 'subscript'],
                            bold: { className: undefined },
                            italic: { className: undefined },
                            underline: { className: undefined },
                            strikethrough: { className: undefined },
                            monospace: { className: undefined },
                            superscript: { className: undefined },
                            subscript: { className: undefined },
                        },
                        blockType: {
                            inDropdown: true,
                            options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote', 'Code'],
                            className: undefined,
                            component: undefined,
                            dropdownClassName: 'dropDown',
                        },
                        fontSize: {

                            options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
                            className: undefined,
                            component: undefined,
                            dropdownClassName: 'dropDown',
                        },
                        fontFamily: {
                            options: fontList,
                            className: undefined,
                            component: undefined,
                            dropdownClassName: 'dropDown'
                        },
                        list: {
                            inDropdown: false,
                            className: undefined,
                            component: undefined,
                            dropdownClassName: undefined,
                            options: ['unordered', 'ordered', 'indent', 'outdent'],
                            unordered: { className: undefined },
                            ordered: { className: undefined },
                            indent: { className: undefined },
                            outdent: { className: undefined },
                        },
                        textAlign: {
                            inDropdown: false,
                            className: undefined,
                            component: undefined,
                            dropdownClassName: undefined,
                            options: ['left', 'center', 'right', 'justify'],
                            left: { className: undefined },
                            center: { className: undefined },
                            right: { className: undefined },
                            justify: { className: undefined },
                        },
                        colorPicker: {

                            className: undefined,
                            component: undefined,
                            popupClassName: undefined,
                            colors: ['rgb(97,189,109)', 'rgb(26,188,156)', 'rgb(84,172,210)', 'rgb(44,130,201)',
                                'rgb(147,101,184)', 'rgb(71,85,119)', 'rgb(204,204,204)', 'rgb(65,168,95)', 'rgb(0,168,133)',
                                'rgb(61,142,185)', 'rgb(41,105,176)', 'rgb(85,57,130)', 'rgb(40,50,78)', 'rgb(0,0,0)',
                                'rgb(247,218,100)', 'rgb(251,160,38)', 'rgb(235,107,86)', 'rgb(226,80,65)', 'rgb(163,143,132)',
                                'rgb(239,239,239)', 'rgb(255,255,255)', 'rgb(250,197,28)', 'rgb(243,121,52)', 'rgb(209,72,65)',
                                'rgb(184,49,47)', 'rgb(124,112,107)', 'rgb(209,213,216)'],
                        },
                        link: {
                            inDropdown: false,
                            className: undefined,
                            component: undefined,
                            popupClassName: undefined,
                            dropdownClassName: undefined,
                            showOpenOptionOnHover: true,
                            defaultTargetOption: '_self',
                            options: ['link', 'unlink'],
                            link: { className: undefined },
                            unlink: { className: undefined },
                            linkCallback: undefined
                        },
                        emoji: {

                            className: undefined,
                            component: undefined,
                            popupClassName: undefined,
                            emojis: [
                                '😀', '😁', '😂', '😃', '😉', '😋', '😎', '😍', '😗', '🤗', '🤔', '😣', '😫', '😴', '😌', '🤓',
                                '😛', '😜', '😠', '😇', '😷', '😈', '👻', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '🙈',
                                '🙉', '🙊', '👼', '👮', '🕵', '💂', '👳', '🎅', '👸', '👰', '👲', '🙍', '🙇', '🚶', '🏃', '💃',
                                '⛷', '🏂', '🏌', '🏄', '🚣', '🏊', '⛹', '🏋', '🚴', '👫', '💪', '👈', '👉', '👉', '👆', '🖕',
                                '👇', '🖖', '🤘', '🖐', '👌', '👍', '👎', '✊', '👊', '👏', '🙌', '🙏', '🐵', '🐶', '🐇', '🐥',
                                '🐸', '🐌', '🐛', '🐜', '🐝', '🍉', '🍄', '🍔', '🍤', '🍨', '🍪', '🎂', '🍰', '🍾', '🍷', '🍸',
                                '🍺', '🌍', '🚑', '⏰', '🌙', '🌝', '🌞', '⭐', '🌟', '🌠', '🌨', '🌩', '⛄', '🔥', '🎄', '🎈',
                                '🎉', '🎊', '🎁', '🎗', '🏀', '🏈', '🎲', '🔇', '🔈', '📣', '🔔', '🎵', '🎷', '💰', '🖊', '📅',
                                '✅', '❎', '💯',
                            ],
                        },
                        embedded: {

                            className: undefined,
                            component: undefined,
                            popupClassName: undefined,
                            embedCallback: undefined,
                            defaultSize: {
                                height: 'auto',
                                width: 'auto',
                            },
                        },
                        image: {
                            // icon: image,
                            className: undefined,
                            // component: undefined,
                            popupClassName: undefined,
                            urlEnabled: true,
                            uploadEnabled: true,
                            alignmentEnabled: true,
                            uploadCallback: uploadImageCallBack,
                            previewImage: false,
                            inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                            alt: { present: false, mandatory: false },
                            defaultSize: {
                                height: 'auto',
                                width: 'auto',
                            },
                        },
                        // remove: { className: undefined, component: undefined },
                        history: {
                            inDropdown: false,
                            className: undefined,
                            component: undefined,
                            dropdownClassName: undefined,
                            options: ['undo', 'redo'],
                            undo: { className: undefined },
                            redo: { className: undefined },
                        },
                    }
                }

            />
        </div>
    );
};

export default TextEditor;
