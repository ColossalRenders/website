import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"

export default function Home() {
  return (
    <object id="MediaPlayer" width="165" height="170"
  type="application/x-oleobject" 
  standby="Loading Microsoft Windows Media Player components..." 
  codebase="http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=9"
  classid="CLSID:22d6f312-b0f6-11d0-94ab-0080c74c7e95">

   <PARAM NAME="FileName" VALUE="vienna.wmv">
   <PARAM NAME="TransparentAtStart" Value="true">
   <PARAM NAME="AutoStart" Value="false">
   <PARAM NAME="AnimationatStart"   Value="true">
   <PARAM NAME="ShowControls" Value="true">
   <PARAM NAME="autoSize" Value="false">
   <PARAM NAME="displaySize" Value="0">
   <EMBED TYPE="application/x-mplayer2"
      pluginspage="http://www.microsoft.com/Windows/MediaPlayer/"
      src="vienna.wmv"
      Name=MediaPlayer AutoStart=0
      Width=165 Height=170
      transparentAtStart=1
      autostart=0
      animationAtStart=1
      ShowControls=1 
      autoSize=0 
      displaySize=0>
   </EMBED>
</OBJECT>
    <div className="prose dark:prose-invert">
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  )
}
