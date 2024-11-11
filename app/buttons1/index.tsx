// @ts-nocheck
import {
  Activity,
  ChevronRight,
  Cloud,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import { Link, Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Button, H6, ListItem, Separator, XGroup, YGroup } from "tamagui";

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

      <Button
        size="$3"
        theme="active"
      >
        Active
      </Button>
      <Button
        size="$3"
        variant="outlined"
      >
        Outlined
      </Button>

      <Button
        themeInverse
        size="$3"
      >
        Inverse
      </Button>
      <Button
        iconAfter={Activity}
        size="$3"
      >
        iconAfter
      </Button>

      <XGroup>
        <XGroup.Item>
          <Button
            width="50%"
            size="$2"
            disabled
            opacity={0.5}
          >
            disabled
          </Button>
        </XGroup.Item>

        <XGroup.Item>
          <Button
            width="50%"
            size="$2"
            chromeless
          >
            chromeless
          </Button>
        </XGroup.Item>
      </XGroup>
    </MyStack>
  );
}
