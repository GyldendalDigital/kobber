<script lang="ts">
import { Badge, BadgeText } from "@gyldendal/kobber-components-poc/svelte/badge";
import {
  Card,
  CardMedia,
  CardMediaLayer,
  CardMediaWrapper,
  CardTextBody,
  CardTextTitle,
  CardTextWrapper,
} from "@gyldendal/kobber-components-poc/svelte/card";
import { Paper } from "@gyldendal/kobber-components-poc/svelte/paper";
import { ToggleButton } from "@gyldendal/kobber-components-poc/svelte/ToggleButton";
import {Button, ButtonIcon, ButtonText} from "@gyldendal/kobber-components-poc/svelte/Button";
</script>
 
<ToggleButton>Custom machine</ToggleButton>

<br />
<br />

<Button
          collection="brand"
          level="primary"
          tone="tone-a"
        >
          <ButtonIcon icon="kobber-arrow_right"/>
          <ButtonText>Brand</ButtonText>
        </Button>

<br/>
<br/>

<Card direction={"vertical"} disabled={true}>
    <Paper>
    <CardMediaWrapper>
        <CardMediaLayer base={true}>
        <CardMedia>
            <!-- media -->
            <img alt="seksjonsteamet spiller shuffleboard" src="./shared/seksjonsteamet.png" />
        </CardMedia>
        </CardMediaLayer>
        <CardMediaLayer>
            <Badge>
                <BadgeText>
                    Svelte
                </BadgeText>
            </Badge>
        </CardMediaLayer>
    </CardMediaWrapper>
    <CardTextWrapper>
        <CardTextTitle>Dette er en tittel</CardTextTitle>
        <CardTextBody>mer tekst for å se hvordan ting brekker når det blir en god del</CardTextBody>
    </CardTextWrapper>
    </Paper>
</Card>
