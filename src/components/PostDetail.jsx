import { Box, Divider, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function PostDetail() {
  const [post, setPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchPost() {
      let response = await fetch(`http://localhost:3000/posts?id=${id}`);
      let data = await response.json();
      setPost(data);
    }
    fetchPost();
  }, [setPost]);

  if (!post) return <h1 style={{ textAlign: "center" }}>Loading...</h1>;

  return (
    <>
      {post.map((item, index) => (
        <Box
          sx={{
            padding: "20px 30px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Box>
            <img
              style={{
                width: "100%",
                borderRadius: "15px",
                height: "500px",
                backgroundPosition: "top",
                backgroundSize: "contain",
              }}
              src={item.imgSrc}
              alt=""
            />
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 800, fontSize: "22px" }} variant="h6">
              {item.title}
            </Typography>
          </Box>
          <Box sx={{ mb: 8 }}>
            <Typography sx={{ color: "#333" }} variant="body1">
              {item.text} Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Sint, laudantium deserunt perspiciatis in, dolores porro nam
              fuga accusamus doloribus quo sapiente reiciendis consequuntur quam
              distinctio ipsa illo deleniti esse est fugiat iure. Corrupti earum
              officiis doloribus! Et aut sapiente veritatis iste reprehenderit
              quibusdam ipsum tempore unde delectus omnis earum obcaecati
              maiores magni harum praesentium distinctio illo soluta
              consequatur, incidunt adipisci sunt saepe animi! Laboriosam veniam
              aliquam inventore totam, reprehenderit cum velit qui quo quaerat
              ea a aliquid mollitia ullam autem ipsa eaque, quos accusamus sed
              deserunt. Totam praesentium incidunt odit voluptatem nesciunt,
              deleniti adipisci distinctio commodi itaque voluptas quisquam
              ratione sapiente eos eaque nihil! Soluta explicabo corporis non
              harum consectetur fugit optio cupiditate exercitationem! Iste
              laboriosam quia obcaecati, rerum laborum dolorum, possimus
              repellendus sequi facere aspernatur numquam architecto neque
              aperiam illum esse officia harum deleniti explicabo excepturi, sit
              expedita? Quibusdam sequi non facere hic nemo quasi quidem
              possimus ex omnis earum minima quo, iusto accusamus atque quaerat
              dolore, rerum a molestias. Veritatis odio reprehenderit ipsa
              aspernatur perferendis nesciunt, at voluptas quisquam ratione
              distinctio ut dolores veniam fuga voluptatem quos animi repellat
              illo rem delectus minus sunt quaerat rerum asperiores omnis.
              Corrupti enim, animi ut aliquam amet natus dignissimos libero,
              quibusdam accusamus necessitatibus laudantium minima impedit
              accusantium consectetur vitae labore. Sed nostrum, beatae sint
              provident tempora saepe libero magni ipsum deserunt vel
              repellendus autem sequi dicta dignissimos dolore maiores nemo
              corporis dolores placeat blanditiis. Neque officia suscipit soluta
              molestias inventore harum reprehenderit, accusamus eveniet iste
              delectus omnis tempore quam error, quidem laborum quia voluptate
              voluptatibus nihil ipsam magnam, similique repellendus quos
              veritatis! Numquam, dolor cum. Dolorum harum eveniet in quidem
              voluptate repellat voluptatum molestias porro esse earum dolor
              omnis, culpa ut maiores a, recusandae, nemo provident optio
              perferendis fugiat temporibus. Minima eveniet quo corrupti.
              Ducimus, porro numquam. Reiciendis corrupti odio tempora.
            </Typography>
          </Box>
          <Divider />
        </Box>
      ))}
    </>
  );
}

export default PostDetail;
