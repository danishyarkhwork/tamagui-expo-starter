// @ts-nocheck
import {
  ChevronRight,
  Cloud,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import { Link, Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Button, H6, ListItem, Separator, YGroup } from "tamagui";

import { MyStack } from "../../components/MyStack";

export default function User() {
  const router = useRouter();

  return (
    <MyStack justifyContent="flex-start">
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: `Components Page`,
          headerLeft() {
            return (
              <Button
                mr="$2.5"
                onPress={router.back}
              >
                <MaterialCommunityIcons name="arrow-left" />
              </Button>
            );
          }
        }}
      />

      <H6>Some Customer Tama GUI Components</H6>

      <ListItemDemo2 />
    </MyStack>
  );
}

function ListItemDemo2() {
  const router = useRouter();

  return (
    <YGroup
      alignSelf="center"
      bordered
      width={320}
      size="$5"
      separator={<Separator />}
    >
      {/* <YGroup.Item>
        <ListItem
          hoverTheme
          pressTheme
          title="Buttons"
          icon={ChevronRight}
          onPress={() => router.push("/buttons")} // Corrected absolute path
        />
      </YGroup.Item> */}

      <Button onPress={() => router.push("/buttons")}>Got to Components</Button>
    </YGroup>
  );
}
