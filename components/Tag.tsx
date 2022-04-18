import {Tag as TagType} from '../types/types'
export default function Tag(tag: TagType){
    return <span key={tag.id}
                 className="tag has-text-primary has-background-black-ter m-1">
                    {tag.attributes.tag}
                </span>
}