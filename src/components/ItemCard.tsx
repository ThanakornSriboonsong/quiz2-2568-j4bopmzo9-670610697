import { Card, Group, Badge, ActionIcon, Text } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";

// type FoodProps = {
//   name: string;
//   price: number | string;
//   quantity: number | string;
//   category: string;
//   onDelete: () => void;
// };

export default function ItemCard() {
  // หากต้องการเปลี่ยนแปลง type ชนิด string เป็น number สามารถใช้วิธีการดังโค้ดตัวอย่างด้านล่างนี้ได้
  let val_number: number = Number("500.0");
  console.log(val_number + 100);

  return (
    
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Adventures</Text>
        <Badge color="pink"> Drink</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>
       <ActionIcon variant="filled" aria-label="Settings">
      <IconTrash style={{ width: '70%', height: '70%' }} stroke={1.5} />
    </ActionIcon>
      
    </Card>
  );
}
