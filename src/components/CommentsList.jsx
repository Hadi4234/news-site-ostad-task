
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import CommentForm from "@/components/CommentForm";

const CommentsList = (props) => {
    return (
        <div className="">
            <Tabs defaultValue="Comments" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="Comments">Comments</TabsTrigger>
    <TabsTrigger value="Create">Create</TabsTrigger>
  </TabsList>
  <TabsContent value="Comments"><ul className="list-group bg-transparent list-group-flush">
                        {
                            props.data.map((item,i)=>{
                                return (
                                    <li className="list-group-item bg-transparent">
                                        <h6 className="text-dark"><i className="bi bi-person-circle"></i> {item['users']['firstName']}</h6>
                                        <p className="text-secondary">{item['descriptions']}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>.</TabsContent>
  <TabsContent value="Create"><CommentForm postID={props.postID}/></TabsContent>
</Tabs>
           
        </div>


    );
};

export default CommentsList;